import { gql } from "apollo-server-express";

const users = {
  firstname: 'sidney'
}

export const typeDef = gql`
  type Users {
    firstname: String
  }
`

export const resolvers = {
  users: () => users
}

export default {
  typeDef,
  resolvers
}