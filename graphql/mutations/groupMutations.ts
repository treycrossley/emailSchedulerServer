import { gql } from 'apollo-server-express'
import { db, tryQuery } from '../../services/database-service'
import { gqlStatusReturn } from '../../services/status-code-service'

interface addGroupArgs {
    id: number
    recipients: String
    name: String
}

interface deleteGroupArgs {
    id: number
}

export const typeDef = gql`
    extend type Mutation {
        "Group: add email-group to db"
        addGroup(id: UUID, recipients: String, name: String): response
        "Group: delete emailgroup from db"
        deleteGroup(id: UUID): response
    }
`

export const resolvers = {
    addGroup: async (_: any, args: addGroupArgs) => {
        const keys = Object.keys(args).join(', ')
        const values = Object.values(args)
        const query = {
            text: `INSERT INTO email_groups(${keys}) VALUES($1, $2, $3)`,
            values: values,
        }
        const res = await tryQuery(query)

        return gqlStatusReturn('addGroup', res)
    },
    deleteGroup: async (_: any, args: deleteGroupArgs) => {
        const value = [args.id]
        const query = {
            text: `DELETE FROM email_groups where id=$1`,
            values: value,
        }
        const res = await tryQuery(query)

        return gqlStatusReturn('dleteGroup', res)
    },
}

export default {
    typeDef,
    resolvers,
}
