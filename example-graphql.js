'use strict'

const { graphql, buildSchema } = require('graphql')

// definimos un schema

// Integer, boolean, String, floaHola Mundot
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

// configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mundo'
  },

  saludo: () => {
    return 'Hola a todos'
  }
}

// ejecutar el query hello
graphql(schema, '{hello}', resolvers).then(
  data => {
    console.log(data)
  }
)

graphql(schema, '{saludo}', resolvers).then(
  data => {
    console.log(data)
  }
)
