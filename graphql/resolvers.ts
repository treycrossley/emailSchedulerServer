import Users from "./Users";
import Book from "./Book";

export const typeDefs = [
  `#graphql
  type Query {
    books: [Book]
    users: Users
  }
`,
  Users.typeDef,
  Book.typeDef,
];

export const resolvers = {
  Query: {
    books: Book.resolvers.books,
    users: Users.resolvers.users,
  },
};
