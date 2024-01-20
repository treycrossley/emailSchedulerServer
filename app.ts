import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv'
import { typeDefs, resolvers } from './graphql/resolvers'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers,
})
await server.start()
server.applyMiddleware({app})
const PORT = Number(process.env.PORT ?? 4000)

app.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.send("Welcome to chili's, I'll be your server");
});

app.listen(PORT, () => { 
    console.log(`Server is Successfully Running, and App is listening at http://localhost:${PORT}`) 
    } 
); 
