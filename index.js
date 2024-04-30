require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


//now we have the middlewares to parser the body and express and all the other types of data
app.use(express.json());
//parsing the url data
app.use(express.urlencoded({extended : true}));

//parsing the cookies
app.use(cookieParser());

app.get('/test' , (req, res)=>{
    res.json("hey working test");
})

app.listen(8000 , ()=>{
    console.log("server is running on port 8000");
})