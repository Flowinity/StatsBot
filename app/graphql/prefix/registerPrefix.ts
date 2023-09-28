import gql from "graphql-tag"

export const RegisterPrefix = gql`
  mutation RegisterBotPrefix($input: RegisterPrefix!) {
    registerBotPrefix(input: $input) {
      success
    }
  }
`
