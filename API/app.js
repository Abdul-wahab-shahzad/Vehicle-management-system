const express=require("express")
const mongoose=require('mongoose')
const dotenv=require("dotenv")
const authRoute=require('./routes/auth')
const userRoute=require('./routes/user')
const vehicaleRoute=require('./routes/vehicale')
const bodyp = require("body-parser")
dotenv.config()
const cors=require("cors")
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

const app=express()



  app.use(bodyp.json())
  app.use('/api/auth', authRoute);
  app.use('/api/user', userRoute);
  app.use('/api/vehicale', vehicaleRoute);



app.listen(3001,()=>{
connect();
    console.log("server listenisg on 3001")
})