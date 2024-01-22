import addUser from './addUser'
import sendEmail from './sendEmail'
import addGroup from './groupMutations'

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
    addGroup.typeDef,
]

export const resolvers = {
    filler: () => 'hello world',
    ...addUser.resolvers,
    ...sendEmail.resolvers,
    ...addGroup.resolvers,
}

export default {
    typeDefs,
    resolvers,
}
