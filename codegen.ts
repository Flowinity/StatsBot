import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:34582/graphql",
  documents: ["app/**/*.ts"],
  generates: {
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
    "./app/gql/": {
      preset: "client",
      config: {
        useTypeImports: true
      }
    }
  }
}

export default config
