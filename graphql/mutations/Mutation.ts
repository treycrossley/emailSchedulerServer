import addUser from './addUser'
import sendEmail from './sendEmail'

export const typeDefs = [
    `#graphql
  type Mutation {
    filler: String
  }
`,
    addUser.typeDef,
    sendEmail.typeDef,
]

export const resolvers = {
    filler: () => 'hello world',
    ...addUser.resolvers,
    ...sendEmail.resolvers,
}

export default {
    typeDefs,
    resolvers,
}
