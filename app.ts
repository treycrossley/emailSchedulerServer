import express, { Express, Request, Response } from "express"
import db from './db.js'
import dotenv from "dotenv";
dotenv.config();

import { ApolloServer, gql } from 'apollo-server-express';

import { typeDefs, resolvers } from './graphql/resolvers.js'


const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

  
const app: Express = express(); 
server.applyMiddleware({app})
const PORT = process.env.PORT || 3000; 


app.get('/users', async (req: Request, res: Response) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
});


app.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.send("Welcome to chili's, I'll be your server");
});
  
app.listen(PORT, () => { 
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  } 
); 