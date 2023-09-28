import gql from "graphql-tag"

export const SendMessage = gql`
  mutation SendMessage($input: SendMessageInput!) {
    sendMessage(input: $input) {
      id
    }
  }
`
