import Users from './Users'
import Groups from './Groups'

const typeDefs = [
    `#graphql
    scalar UUID
  type Query {
    users: [User]
    getGroups: [Group]
  }
`,
    Users.typeDef,
    Groups.typeDef,
]

const resolvers = {
    ...Users.resolvers,
    ...Groups.resolvers,
}

export default {
    typeDefs,
    resolvers,
}
