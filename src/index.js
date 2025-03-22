import {startStandaloneServer} from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { server } from './server.js';

const username = 'jfcarocota';
const password = '22XOM9ItOYVjOili';
const dbname = 'amk25db';
const port = '4000';
const host = 'localhost';
const serverUrl = `http://${host}:${port}/graphql`;

const uri = `mongodb+srv://${username}:${password}@cluster0.de0zc.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri).then(()=> {
  startStandaloneServer(server, {
    listen: {port}
  }).then(()=> {
    console.log(`Running server at: ${serverUrl}`);
  });
});