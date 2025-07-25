import characterData from './models/characterData.js';
import CharacterData from './models/characterData.js';
import styleNameData from './models/styleNameData.js';
import StyleNameData from './models/styleNameData.js';

export const resolvers = {
  Query: {
    Hello: () => "Hello World, Graphql",

    CharacterDataList: async () =>
        CharacterData.find({}).populate("styleName"),

    StyleNameDataList: async () =>
        StyleNameData.find({}),

    CharacterDataByStyleName: async (root, args) => {
      const { styleNameId } = args;
      return CharacterData.find({ styleName: styleNameId}).populate("styleName");
    },

    CharacterDataById: async (root, args) => {
      const { id } = args;
      return CharacterData.findById(id).populate("styleName");
    },
    StyleNameDataById: async (root, args) => {
      const { id } = args;
      return StyleNameData.findById(id);
    },
    CharacterDataWitHighestStylePriority: async (root, args) => {
      const topStyle = await styleNameData.findOne().sort({priority: -1});
      if(!topStyle) return null;
      return await characterData.findOne({styleName: topStyle.id}).populate("styleName");
    }
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

    editStyleNameData: async (root, args) => {
      const { id, styleName, priority } = args;

      const updatedFields = {};
      if (styleName !== undefined) updatedFields.styleName = styleName;
      if (priority !== undefined) updatedFields.priority = priority;

      const updated = await StyleNameData.findByIdAndUpdate(
          id,
          updatedFields,
          { new: true, runValidators: true }
      );

      if (!updated) {
        throw new Error("StyleNameData not found");
      }

      return updated;
    },
  },
};