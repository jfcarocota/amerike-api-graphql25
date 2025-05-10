import CharacterData from './models/characterData.js';
import StyleNameData from './models/styleNameData.js';

export const resolvers = {
  Query: {
    Hello: (root, args) => "Hello World, Graphql",
    CharacterDataList: async (root, args) => CharacterData.find({}), //find all
    StyleNameDataList: async (root, args) => StyleNameData.find({}), //find all
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
      addStyleNameData: async (root, args) => {
        const styleNameData = new StyleNameData({...args});
        return styleNameData.save();
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