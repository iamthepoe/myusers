const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', require('./routes/routes.js'));
app.listen(8080, ()=>{console.log("Server is running.")});