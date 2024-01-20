import { gql } from 'apollo-server-express'
import { db } from '../services/database-service'

const getUsers = async () => {
    const result = await db.query('SELECT * FROM users')
    return result.rows
}

export const typeDef = gql`
    type User {
        id: Int
        firstname: String
        lastname: String
        age: Int
    }
`

export const resolvers = {
    users: getUsers,
}

export default {
    typeDef,
    resolvers,
}
