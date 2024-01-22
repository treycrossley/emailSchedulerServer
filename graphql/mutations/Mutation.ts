import addUser from './addUser'
import sendEmail from './sendEmail'
import addGroup from './addGroup'

export const typeDefs = [
    `#graphql
  type Mutation {
    filler: String
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
