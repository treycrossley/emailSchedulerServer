import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import { typeDefs, resolvers } from './graphql'
import express, { Express, Request, Response } from 'express'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
const server = new ApolloServer({
    typeDefs,
    resolvers,
})
await server.start()
server.applyMiddleware({app, bodyParserConfig: {
    limit:"15mb"
  }})
const PORT = Number(process.env.PORT ?? 4000)

app.get('/', (req: Request, res: Response) => {
    res.status(200)
    res.send("Welcome to chili's, I'll be your server")
})

app.listen(PORT, () => {
    console.log(`Server is Successfully Running, and App is listening at http://localhost:${PORT}`)
})
