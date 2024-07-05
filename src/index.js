const express=require('express');
const connect = require('./config/database')
const app= express();
const TweetRepository =require('./repository/tweet-repository')

app.listen(3000,async()=>{
    console.log(`Server Started `);
    await connect();
    console.log('Mongo DB Connected');
}) 