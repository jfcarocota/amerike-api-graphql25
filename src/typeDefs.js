export const typeDefs = `#graphql 
  type Query {
    Hello: String!
    CharacterDataList: [CharacterData]!
    CharacterDataByStyleName(styleNameId: String!): [CharacterData]!
    CharacterDataById(id: String!): CharacterData!
    StyleNameDataList: [StyleNameData]
    StyleNameDataById(id: String!): StyleNameData!
    CharacterDataWitHighestStylePriority: CharacterData!
  }

  type Mutation {
    addCharacterData(
      moveSpeed: Float!
      jumpForce: Float!
      styleNameId: String!
    ): CharacterData!

    addStyleNameData(
      styleName: String!
      priority: Int!
    ): StyleNameData!

    editCharacterData(
      id: String!
      moveSpeed: Float!
      jumpForce: Float!
      styleNameId: String!
    ): CharacterData!

    editStyleNameData(
      id: String!
      styleName: String!
      priority: Int!
    ): StyleNameData!
  }

  type CharacterData {
    id: ID!
    moveSpeed: Float!
    jumpForce: Float!
    styleName: StyleNameData
  }

  type StyleNameData {
    id: ID!
    styleName: String!
    priority: Int!
  }
`;