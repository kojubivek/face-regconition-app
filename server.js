const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');
const cors = require('cors');
const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const image = require('./controllers/image.js');
const profile = require('./controllers/profile.js');
 



 const db = knex ({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'face',
    database : 'smart-brain'
  }
});


const app = express();
 app.use(bodyParser.json());
 app.use(cors());

app.listen(process.env.PORT ||3000, () =>{
	console.log('app is running on port ${process.env.PORT}')
})


app.get('/', (req,res) => {

	res.send(database.users)	
})

app.post('/signin', (req,res) =>{signin.handleSignin (req, res, db, bcrypt)} );

app.post('/register', (req,res) => {register.handleRegister(req, res, db, bcrypt)})
	

app.get('/profile/:id', (req,res) => {profile.handleProfile(req,res,db)} )

app.put('/image', (req,res) => {image.handleImage(req, res, db)} )

app.post('/imageurl', (req,res) => {image.handleApiCall(req, res)} )












/*
/--> res= this os working
/ signin --> post = sussecee/fail
/resgister --> post = user
/ profile/:userID --> GET = user
/image --> PUT --> user
*/