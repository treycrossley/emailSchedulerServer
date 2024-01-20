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
    users: Users.resolvers.users
}

export default {
    typeDefs,
    resolvers
}