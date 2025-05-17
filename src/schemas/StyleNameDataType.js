import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

const StyleNameDataType = new GraphQLObjectType({
  name: 'StyleNameData',
  fields: ()=>({
    id: {type: GraphQLID},
    styleName: {type: GraphQLString},
    priority: {type: GraphQLInt}
  })
})

export default StyleNameDataType;