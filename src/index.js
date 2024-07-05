const express=require('express');
const connect = require('./config/database')
const app= express();
const Tweet =require('./models/tweet')

app.listen(3000,async()=>{
    console.log(`Server Started `);
    await connect();
    console.log('Mongo DB Connected');

    // const tweetRepo= new TweetRepository();
    // const tweet= await tweetRepo.create({content:'With hooks'})
    // console.log(tweet);
}) 