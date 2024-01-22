import { gql } from 'apollo-server-express'
import { db, tryQuery } from '../../services/database-service'
import { gqlStatusReturn } from '../../services/status-code-service'

interface addUserArgs {
    id: number
    firstname: String
    lastname: String
    age: number
}

export const typeDef = gql`
    extend type Mutation {
        "Group: add email-group to db"
        addGroup(id: UUID, recipients: String, name: String): addGroupResponse
    }

    type addGroupResponse {
        code: Int
        success: Boolean
        message: String
    }
`

export const resolvers = {
    addGroup: async (_: any, args: addUserArgs) => {
        console.log(args)
        const keys = Object.keys(args).join(', ')
        const values = Object.values(args)
        const query = {
            text: `INSERT INTO email_groups(${keys}) VALUES($1, $2, $3)`,
            values: values,
        }
        const res = await tryQuery(query, 'addUser')

        return gqlStatusReturn('addGroup', res)
    },
}

export default {
    typeDef,
    resolvers,
}
