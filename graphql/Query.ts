import { gql } from 'apollo-server-express'

export const typeDef = gql`
    type Query {
        hello: String
        goodbye: String
    }
`

export const resolvers = {
    hello: () => 'Hello world!',
    goodbye: () => 'Goodbye world!',
}

export default {
    typeDef,
    resolvers,
}
