import Mutation from './mutations/Mutation'
import Query from './Query'

export const typeDefs = [...Query.typeDefs, ...Mutation.typeDefs]

export const resolvers = {
    Query: Query.resolvers,
    Mutation: Mutation.resolvers,
}
