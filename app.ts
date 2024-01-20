import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from "dotenv"
import {typeDefs, resolvers} from './graphql/resolvers'

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const PORT = Number(process.env.PORT ?? 4000);
const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀  Server ready at: ${url}`);