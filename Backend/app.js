const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());
const PORT=process.env.PORT
require('./db/connection')
const prouductRoutes=require('./routes/basicRoutes');
app.use('/home',prouductRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})