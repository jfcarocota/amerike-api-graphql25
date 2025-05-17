import { GraphQLFloat, GraphQLID, GraphQLObjectType } from 'graphql';
import StyleNameData from '../models/styleNameData.js';
import StyleNameDataType from './StyleNameDataType.js';

const CharacterDataType = new GraphQLObjectType({
  name: "CharacterData",
  fields: ()=>({
    id: {type: GraphQLID},
    moveSpeed: {type: GraphQLFloat},
    jumpForce: {type: GraphQLFloat},
    styleName: {
      type: StyleNameDataType,
      resolve(parent, args){
        return  StyleNameData.findById(parent.styleNameId).clone();
      }
    }
  })
});

export default CharacterDataType;