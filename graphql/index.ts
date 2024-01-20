import Users from './Users'
import Mutation from './mutations'

export const typeDefs = [
    `#graphql
  type Query {
    users: [User]
  }
`,
    Users.typeDef,
    ...Mutation.typeDefs,
]

export const resolvers = {
    Query: {
        users: Users.resolvers.users,
    },
    Mutation: Mutation.resolvers,
}
