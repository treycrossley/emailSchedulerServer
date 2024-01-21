import { gql } from 'apollo-server-express'
import { sendEmail } from '../../services/email-service'
import { gqlStatusReturn } from '../../services/status-code-service'
import { Attachment } from 'nodemailer/lib/mailer'

interface sendEmailArgs {
    recipient: string
    subject: string
    text: string
    html?: string
    attachments?: Array<Attachment>
}


export const typeDef = gql`
    extend type Mutation {
        "EMAIL: send an email"
        sendEmail(
            recipient: String
            subject: String
            text: String
            html: String
            attachments: [Attachment]
        ): sendEmailResponse
    }

    type sendEmailResponse {
        code: Int
        success: Boolean
        message: String
    }

    input Attachment {
        filename: String!
        path: String!
        encoding: String!
    }
`

export const resolvers = {
    sendEmail: async (_: any, args: sendEmailArgs) => {
        const { recipient, subject, text, html, attachments } = args
        
        let files: Attachment[] = []
        attachments?.forEach(attachment => {
            files.push({ filename: attachment.filename, path: attachment.path, encoding: attachment.encoding })
        });    
        
        const result = await sendEmail(recipient, subject, text, html, files)
        return gqlStatusReturn('sendEmail', result)

    },
}

export default {
    typeDef,
    resolvers,
}
