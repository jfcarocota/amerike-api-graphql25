export const typeDefs = `#graphql 
  type Query{
    Hello: String!
    CharacterDataList: [CharacterData]!
  },
  type CharacterData{
    id: ID!,
    moveSpeed: Float!
    jumpForce: Float!
    styleName: String!
  }
`;