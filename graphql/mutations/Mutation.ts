import addUser from './addUser'
import sendEmail from './sendEmail'
import groupMutations from './groupMutations'

export const typeDefs = [
    `#graphql
  type Mutation {
    filler: String
  }
  type response {
        code: Int
        success: Boolean
        message: String
    }
`,
    addUser.typeDef,
    sendEmail.typeDef,
    groupMutations.typeDef,
]

export const resolvers = {
    filler: () => 'hello world',
    ...addUser.resolvers,
    ...sendEmail.resolvers,
    ...groupMutations.resolvers,
}

export default {
    typeDefs,
    resolvers,
}
