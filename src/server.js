import { ApolloServer } from "@apollo/server";
import {typeDefs} from './typeDefs.js';
import {resolvers} from './resolvers.js';
import Schema from "./schemas/Schema.js";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false
});

/*export const server = new ApolloServer({
  schema: Schema,
  csrfPrevention: false
});*/