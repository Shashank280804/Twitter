import express from 'express';
import { connect } from './config/database.js';  // Ensure the file extension is included
import service from './services/tweet-service.js'

const app = express();

app.listen(3000, async () => {
  console.log('Server Started');
  await connect();
  console.log('Mongo db connected');
  let ser = new service();
  await ser.create({content:'Done with #refactor?'})
});
