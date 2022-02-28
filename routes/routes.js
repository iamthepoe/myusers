const express = require('express');
const app = express();
const User = require('../database/User.js');
app.get('/', (req,res)=>{
	res.render('index.ejs');
});

app.get('/signin', (req,res)=>{
	res.render('signin.ejs');
});

app.get('/login', (req,res)=>{
	res.render('login.ejs');
});

app.get('/userlist', (req,res)=>{
	User.findAll({raw:true, order:[['id', 'DESC']]}).then(user=>{
		res.render('userslist.ejs',{
			user: user
		});
	});
});

app.post('/saveaccount', (req,res)=>{
	let username = req.body.username;
	let password = req.body.password;
	let confirmPassword = req.body.confirmPassword;
	if(password!=confirmPassword){
		res.render("passworderror.ejs");
	}else{
		User.create({
			username: username,
			password: password
		}).then(()=>{
			res.redirect('/');
		});
	}
});

app.post('/startinglogin', (req,res)=>{
	let username = req.body.username;
	let password = req.body.password;
	console.log(`
		${username}
		- - - - - - 
		${password}
	`);
	res.send("This!");
});

module.exports = app;