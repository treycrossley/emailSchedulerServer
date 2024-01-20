import Mutation from './mutations'
import Query from './Query'

export const typeDefs = [
  ...Query.typeDefs,
  ...Mutation.typeDefs,
]

export const resolvers = {
    Query: Query.resolvers,
    Mutation: Mutation.resolvers,
}
