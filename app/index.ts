import "reflect-metadata"
import "module-alias/register"
import config from "./config.json"
import { io } from "socket.io-client"
import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache
} from "@apollo/client"
import { RegisterPrefix } from "./graphql/prefix/registerPrefix"
import { RegisterCommand } from "./graphql/prefix/registerCommand"
import { SendMessage } from "./graphql/chat/sendMessage"
import { EmbedInput } from "@app/gql/graphql"
import sequelize from "./db"
import { Stat } from "./models/stats.model"
console.log(sequelize.models)
const commands = [
  {
    command: "help",
    description: "Help information"
  },
  {
    command: "top",
    description: "Top on the leaderboard"
  }
]

const prefix = "s"

const httpLink = new HttpLink({
  uri: `http://${config.instance}/graphql`
})

const authLink = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = config.token
  operation.setContext({
    headers: {
      authorization: token,
      clientName: "Bot"
    }
  })
  return forward(operation)
})

const appLink = from([authLink, httpLink])

// Create the apollo client
const apollo = new ApolloClient({
  link: appLink,
  cache: new InMemoryCache({
    addTypename: true
  })
})

// Register the prefix with PrivateUploader
async function registerPrefix() {
  await apollo.mutate({
    mutation: RegisterPrefix,
    variables: {
      input: {
        prefix
      }
    }
  })
  console.log(`Registered prefix`)
  registerCommands()
}

async function sendMessage(
  content: string,
  associationId: number,
  replyId?: number,
  embeds?: EmbedInput[]
) {
  await apollo.mutate({
    mutation: SendMessage,
    variables: {
      input: {
        content,
        replyId,
        associationId,
        embeds
      }
    }
  })
}

// Register the prefix commands with PrivateUploader
async function registerCommands() {
  for (const command of commands) {
    await apollo.mutate({
      mutation: RegisterCommand,
      variables: {
        input: command
      }
    })
    console.log(`Registered: ${command.command}`)
  }
}

async function handle(data: any) {
  const message = data.message
  const command = message.content.split(prefix + "!")[1]
  switch (command) {
    case "help":
      sendMessage("", data.associationId, message.id, [
        {
          title: "Stats Bot",
          description: "No help for you."
        }
      ])
      break
    case "top":
      const users = await Stat.findAll({
        where: {
          chatId: data.message.chatId
        },
        order: [["xp", "DESC"]],
        limit: 10
      })
      sendMessage("", data.associationId, message.id, [
        {
          title: "Stats Bot - s!top",
          description:
            "- " +
            users.map((user) => `<@${user.userId}> - ${user.xp}xp`).join("\n- ")
        }
      ])
  }
}

function genXP() {
  const min = 10
  const max = 40
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function main() {
  const socket = io(`ws://${config.instance}/chat`, {
    auth: {
      token: config.token
    },
    transports: ["websocket"],
    reconnection: true,
    path: "/gateway",
    reconnectionAttempts: 99999
  })
  socket.connect()
  socket.on("connect", () => {
    console.log("Connected!")
    registerPrefix()
  })
  socket.on("connect_error", (err) => {
    console.log("Error!", err)
  })
  socket.on("message", async (data) => {
    if (data.message.content.startsWith(prefix + "!")) {
      handle(data)
    } else {
      const user = await Stat.findOne({
        where: {
          userId: data.message.userId,
          chatId: data.message.chatId
        }
      })
      if (!user) {
        await Stat.create({
          userId: data.message.userId,
          chatId: data.message.chatId,
          messages: 1,
          xp: genXP()
        })
        return
      } else if (new Date().getTime() - user.updatedAt.getTime() > 120000) {
        await user.update({
          messages: user.messages + 1,
          xp: user.xp + genXP()
        })
      } else {
        await user.update({
          messages: user.messages + 1
        })
      }
    }
  })
}

main()
