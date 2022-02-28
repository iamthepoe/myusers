const express = require('express');
const app = express();

app.get('/', (req,res)=>{
	res.render('index.ejs');
});

app.get('/signin', (req,res)=>{
	res.render('signin.ejs');
});

module.exports = app;