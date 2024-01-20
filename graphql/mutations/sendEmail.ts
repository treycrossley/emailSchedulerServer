import { gql } from 'apollo-server-express'
import { sendEmail } from '../../services/email-service'
import { db, tryQuery } from '../../db'
import { gqlStatusReturn } from '../../services/status-code-service'

export const typeDef = gql`
    extend type Mutation {
        "EMAIL: send an email"
        sendEmail: sendEmailResponse
    }

    type sendEmailResponse {
        code: Int
        success: Boolean
        message: String
    }
`

export const resolvers = {
    sendEmail: async () => {
        const result = await sendEmail()
        return gqlStatusReturn("sendEmail", result);
    },
}

export default {
    typeDef,
    resolvers,
}
