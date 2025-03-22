import CharacterData from './models/characterData.js'

export const resolvers = {
  Query: {
    Hello: (root, args) => "Hello World, Graphql",
    CharacterDataList: async (root, args) => CharacterData.find({}), //fin all
  }
}