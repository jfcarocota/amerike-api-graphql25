import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import CharacterDataType from "./CharacterDataType.js";
import CharacterData from "../models/characterData.js";
import StyleNameData from "../models/styleNameData.js";
import StyleNameDataType from "./StyleNameDataType.js";


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    //Character Data
    characterDataById:{
      type: CharacterDataType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        const {id} = args;
        return CharacterData.findById(id).clone();
      }
    },
    characterDataList: {
      type: new GraphQLList(CharacterDataType),
      resolve(parent, args){
        return CharacterData.find({}).clone();
      }
    },
    styleNameDataById: {
      type: StyleNameDataType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        const id= args;
        return StyleNameData.findById(id).clone();
      }
    },
    styleNameDataList: {
      type: new GraphQLList(StyleNameDataType),
      resolve(parent, args){
        return StyleNameData.find({}).clone();
      }
    },
  }
});

export default Query;