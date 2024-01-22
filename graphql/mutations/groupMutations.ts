import { gql } from 'apollo-server-express'
import { db, tryQuery } from '../../services/database-service'
import { gqlStatusReturn } from '../../services/status-code-service'
import * as uuid from 'uuid'

interface groupArgs {
    id?: string
    recipients: String
    name: String
}

interface deleteGroupArgs {
    id?: number
}

export const typeDef = gql`
    extend type Mutation {
        "Group: add email-group to db"
        addGroup(recipients: String, name: String): response
        "Group: delete emailgroup from db"
        deleteGroup(id: UUID): response
        "Group: update group in db"
        updateGroup(id: UUID, recipients: String, name: String): response
    }
`

export const resolvers = {
    addGroup: async (_: any, args: groupArgs) => {
        args.id = uuid.v4();
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

        return gqlStatusReturn('deleteGroup', res)
    },
    updateGroup: async (_: any, args: groupArgs) => {
        const value = [args.recipients, args.name, args.id]
        const query = {
            text: `UPDATE email_groups SET recipients=$1, name=$2 where id=$3`,
            values: value,
        }
        const res = await tryQuery(query)
        return gqlStatusReturn('updateGroup', res)
    }
}

export default {
    typeDef,
    resolvers,
}
