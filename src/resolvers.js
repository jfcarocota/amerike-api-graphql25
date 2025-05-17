import CharacterData from './models/characterData.js';
import StyleNameData from './models/styleNameData.js';

export const resolvers = {
  Query: {
    Hello: () => "Hello World, Graphql",

    CharacterDataList: async () =>
        CharacterData.find({}).populate("styleName"),

    StyleNameDataList: async () =>
        StyleNameData.find({}),

    CharacterDataByStyleName: async (root, args) => {
      const { styleName } = args;
      const style = await StyleNameData.findOne({ styleName });
      if (!style) return [];
      return CharacterData.find({ styleName: style._id }).populate("styleName");
    },

    CharacterDataById: async (root, args) => {
      const { id } = args;
      return CharacterData.findById(id).populate("styleName");
    },
  },

  Mutation: {
    addCharacterData: async (root, args) => {
      const { moveSpeed, jumpForce, styleNameId } = args;
      const characterData = new CharacterData({
        moveSpeed,
        jumpForce,
        styleName: styleNameId,
      });
      return characterData.save().then(doc => doc.populate("styleName"));
    },

    addStyleNameData: async (root, args) => {
      const styleNameData = new StyleNameData({ ...args });
      return styleNameData.save();
    },

    editCharacterData: async (root, args) => {
      const { id, moveSpeed, styleNameId, jumpForce } = args;
      const characterData = await CharacterData.findById(id);
      characterData.moveSpeed = moveSpeed;
      characterData.jumpForce = jumpForce;
      characterData.styleName = styleNameId;
      return characterData.save().then(doc => doc.populate("styleName"));
    },
  },
};