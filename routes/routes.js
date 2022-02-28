const express = require('express');
const app = express();

app.get('/', (req,res)=>{
	res.render('index.ejs');
});

app.get('/signin', (req,res)=>{
	res.render('signin.ejs');
});

app.post('/saveaccount', (req,res)=>{
	let username = req.body.username;
	let password = req.body.password;
	let confirmPassword = req.body.confirmPassword;
	if(password!=confirmPassword){
		res.render("passworderror.ejs");
	}
});

module.exports = app;