const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
  export const typeDef = `
  type Book {
    title: String
    author: String
  }
  `

  export const resolvers = {
    books: () => books,
  }

export default {
    typeDef,
    resolvers
  }