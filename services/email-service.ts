import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { Attachment } from 'nodemailer/lib/mailer'

dotenv.config()

const senderEmail = process.env.MAIL_USERNAME || 'test@example.com'
const sampleSubject = 'Hello from Nodemailer'
const sampleText = 'This is a test email sent using Nodemailer'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
})

export const sendEmail = async (
    recipient: string = senderEmail,
    subject: string = sampleSubject,
    text: string = sampleText,
    html: string = `<p>${text}</p>`,
    attachments: Array<Attachment> = []
) => {
    const mailOptions = {
        from: senderEmail,
        to: recipient.trim(),
        subject: subject,
        text: text,
        html: html,
        attachments: attachments,
    }
    try {
        const info = await transporter.sendMail(mailOptions)
        return info
    } catch (err) {
        return err
    }
}
