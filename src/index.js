import express from 'express';
import { connect } from './config/database.js'; 
import apiRoutes from'./routes/index.js'
import bodyParser from 'body-parser';
import {UserRepository,TweetRepository} from './repository/index.js'
import LikeService from './services/like-service.js';


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',apiRoutes)

app.listen(3000, async () => {
  console.log('Server Started');
  await connect();
  console.log('Mongo db connected');
  
  // this.userRepo = new UserRepository();
  // this.tweetRepo = new TweetRepository();
  // const tweets = this.tweetRepo.getAll(0,10);


  // const user = await this.userRepo.create({
  //   email: 'shashank@gmail.com',
  //   password: '123456',
  //   name: 'Shashank'
  // });

  // const likeService= new LikeService();
  // await likeService.toggleLike(tweets[0],'Tweet',user.id); 

});
