import { GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import CharacterDataType from "./CharacterDataType.js";
import CharacterData from "../models/characterData.js";
import StyleNameData from "../models/styleNameData.js"
import StyleNameDataType from "./StyleNameDataType.js";


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields:{
    //CharacterData
    addCharacterData: {
      type: CharacterDataType,
      args: {
        moveSpeed: {type: GraphQLFloat},
        jumpForce: {type: GraphQLFloat},
        styleNameId: {type: GraphQLString},
      },
      resolve(parent, args){
        const characterData = new CharacterData(args);
        return characterData.save();
      }
    },
    addStyleNameData: {
      type: StyleNameDataType,
      args: {
        styleName: {type: GraphQLString},
        priority: {type: GraphQLInt},
      },
      resolve(parent, args){
        const styleNameData = new StyleNameData(args)
        return styleNameData.save();
      }
    }
  }
});

export default Mutation;