import { gql } from "apollo-server-express";
import exp from "constants";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export default typeDefs