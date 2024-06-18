const express= require('express');//  we are importing the express module to achieve its functionality
const dotEnv= require('dotenv');// we are importing the dotenv module to load environmental variables from a .env file into  process.env
const mongoose=require('mongoose');// we are importing mongoose module to connect MongoDB and to define schemas and models for our MongoDB collections.
const bodyParser=require('body-parser');
const vendorRoutes=require('./routes/vendorRoutes');
const firmRoutes=require('./routes/firmRoutes');
const productRoutes=require('./routes/productRoutes');
const corse=require('cors');
const path=require('path');
  dotEnv.config();//we should call config() then only we can load env variables from .env file into process.env

const app= express();
const PORT=process.env.PORT||4000;

 app.use(bodyParser.json());

 app.use('/vendor',vendorRoutes);

 app.use('/firm',firmRoutes);

 app.use('/product',productRoutes);
  
  app.use('/uploads',express.static('uploads'));
    mongoose.connect(process.env.MONGO_URI)
     .then(()=>console.log('MongoDB connected Successfully!!!'))
     .catch((error)=>console.log(error))

 app.use('/',(req,res)=> res.send("<h1>Welcome to HungryHub"))

 app.listen(PORT,()=>console.log(`server started and running at ${PORT}`));// to start the server
