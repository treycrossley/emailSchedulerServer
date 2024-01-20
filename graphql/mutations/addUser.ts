import { gql } from 'apollo-server-express'
import { db, tryQuery } from '../../db'
import { gqlStatusReturn } from '../../services/status-code-service'

interface addUserArgs {
    id: number
    firstname: String
    lastname: String
    age: number
}

export const typeDef = gql`
    extend type Mutation {
        "USER: add user to db"
        addUser(id: Int, firstname: String, lastname: String, age: Int): addUserResponse
    }

    type addUserResponse {
        code: Int
        success: Boolean
        message: String
    }
`

export const resolvers = {
    addUser: async (_: any, args: addUserArgs) => {
        const keys = Object.keys(args).join(', ')
        const values = Object.values(args)
        const query = {
            text: `INSERT INTO users(${keys}) VALUES($1, $2, $3, $4)`,
            values: values,
        }
        const res = await tryQuery(query, 'addUser')

        return gqlStatusReturn("addUser", res)
    },
}

export default {
    typeDef,
    resolvers,
}
