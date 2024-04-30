require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.get('/test' , (req, res)=>{
    res.json("hey working test");
})

app.listen(8000 , ()=>{
    console.log("server is running on port 8000");
})