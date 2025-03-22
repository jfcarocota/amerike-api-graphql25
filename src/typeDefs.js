export const typeDefs = `#graphql 
  type Query{
    Hello: String!
    CharacterDataList: [CharacterData]!
    CharacterDataByStyleName(styleName: String!): [CharacterData]!
  },
  type CharacterData{
    id: ID!,
    moveSpeed: Float!
    jumpForce: Float!
    styleName: String!
  }
`;