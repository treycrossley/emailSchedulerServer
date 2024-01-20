import addUser from './addUser'

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
    addBook(title: String!, author: String): addBookResponse
  }
`,
    addUser.typeDef,
]

export const resolvers = {
    addBook: (_: any, args: any) => {
        console.log(args)
        return {
            code: 200,
            success: true,
            message: 'succesfully pushed book',
        }
    },
    ...addUser.resolvers,
}

export default {
    typeDefs,
    resolvers,
}
