import gql from "graphql-tag"

export const RegisterCommand = gql`
  mutation RegisterBotCommand($input: RegisterCommand!) {
    registerBotCommand(input: $input) {
      success
    }
  }
`
