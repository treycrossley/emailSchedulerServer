import nodemailer from 'nodemailer'
import { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

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

const mailOptions = {
    from: 'test@example.com',
    to: process.env.MAIL_USERNAME,
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent using Nodemailer.',
}

export const sendEmail = (req: Request, res: Response) => {
    transporter.sendMail(mailOptions, (error, info) => {
        console.log(mailOptions)
        if (error) {
            console.error('Error sending email: ', error)
            res.status(500)
            res.send('Error')
        } else {
            console.log('Email sent: ', info.response)
            res.status(200)
            res.send('email succesffully sent')
        }
    })
}
