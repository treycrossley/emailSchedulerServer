import { gql } from 'apollo-server-express'
import { db, tryQuery } from '../services/database-service'
import { QueryConfig } from 'pg'

const getGroups = async () => {
    const query: QueryConfig = { text: 'SELECT * FROM email_groups' }
    const result: any = await tryQuery(query)
    return result.rows
}

export const typeDef = gql`
    type Group {
        id: UUID
        recipients: String
        name: String
    }
`

export const resolvers = {
    getGroups: getGroups,
}

export default {
    typeDef,
    resolvers,
}
