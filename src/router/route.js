const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Register = require('../models/registers');
const cntct = require('../models/contact.js');
router.use(cors());
const authenticate = require('../middle/auth');
router.use(cookieParser());

router.post('/send', async (req, res) => {
    try {
        const user = new Register(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.get('/send', async (req, res) => {

   try {
        const sData = await Register.find();
        res.status(201).send(sData);
   }catch(e) {
        res.status(400).send(e);
   }

});

router.post('/login', async (req, res) => {
    try{
		
		const {email, password} = req.body;

        const username = await Register.findOne({email:email});
		
        const isMatch = await bcrypt.compare(password, username.password);
		
		 const token = await username.generateAuthToken();
		 
		 res.cookie('jwtoken', token, {
             expires: new Date(Date.now() + 25892000000),
             maxAge: 900000,
			 httpOnly:true
		 });

            if(isMatch){
                res.status(201).send('valid credentails');
            }else{
                res.send('invalid credentials');
            }
    }catch(err){
        res.status(400).send('invalid');
    }
});

router.get('/about',authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.post('/contact', async (req, res) => {
    try {
        const users = new cntct(req.body);
        const createusers = await users.save();
        res.status(201).send(createusers);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.get('/logout', async (req, res) => {
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('logout successfull');
    console.log('logged out');
})

module.exports = router;