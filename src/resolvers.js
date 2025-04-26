import CharacterData from './models/characterData.js'

export const resolvers = {
  Query: {
    Hello: (root, args) => "Hello World, Graphql",
    CharacterDataList: async (root, args) => CharacterData.find({}), //fin all
    CharacterDataByStyleName: async (root, args) => {
      const {styleName} = args;
      return CharacterData.find({styleName});
    },
    CharacterDataById: async (root, args) => {
      const {id} = args;
      return CharacterData.findById(id);
    }
  },
    Mutation: {
      addCharacterData: async (root, args) => {
        const characterData = new CharacterData({...args});
        return characterData.save();
      },
      editCharacterData: async (root, args) => {
        const {id, moveSpeed, styleName, jumpForce} = args;
        const characterData = await CharacterData.findById(id);
        characterData.moveSpeed = moveSpeed;
        characterData.styleName = styleName;
        characterData.jumpForce = jumpForce;
        return characterData.save();
    }
  }
}