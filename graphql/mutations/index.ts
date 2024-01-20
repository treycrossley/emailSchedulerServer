const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
]

export const typeDefs = [
    `#graphql

  type addBookResponse {
    code: Int
    success: Boolean
    message: String
  }
  type Mutation {
    addBook: addBookResponse
  }
`,
]

export const resolvers = {
    addBook: () => {
        return {
            code: 200,
            success: true,
            message: 'succesfully pushed book',
        }
    },
}

export default {
    typeDefs,
    resolvers,
}
