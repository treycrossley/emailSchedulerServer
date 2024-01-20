import Users from './Users'

export const typeDefs = [
    `#graphql
  type Query {
    users: [User]
  }
`,
    Users.typeDef,
]

export const resolvers = {
    Query: {
        users: Users.resolvers.users,
    },
}
