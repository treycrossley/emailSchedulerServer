import Users from './Users'

const typeDefs = [
    `#graphql
  type Query {
    users: [User]
  }
`,
    Users.typeDef,
]

const resolvers = {
    ...Users.resolvers,
}

export default {
    typeDefs,
    resolvers,
}
