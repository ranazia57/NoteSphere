const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'ThisisSecureMyP@$$w0rd!12345'

//ROUTE 1: Create a User using:POST "/api/auth/createuser"  Doesn't requair Athentication
router.post('/createuser',[
    body('name','Please Enter a Valid name.').isLength({ min: 3 }),
    body('email','Please Enter a Valid email.').isEmail(),
    body('password','Password is must be more than 8 characters').isLength({ min: 8 })
],async (req,res)=>{
    let success = false;
    // If there are errors, Return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Cheack weather the user with the same email exists already
    try {
    let user = await User.findOne({ email : req.body.email});
    if(user){
        return res.status(400).json({success, error : "Sorrry, a user with this Email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass,
    })

    const data = {
        user: user.id,
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // console.log(authtoken)
    const success = true;
    res.json({success, authtoken});

    
} catch (error) {
    console.error(error.message),
    res.status(500).send('Something went wrong')
        
}
})



//ROUTE 2: Athenticate a user using:POST "/api/auth/login"  
router.post('/login',[
    body('email','Please Enter a Valid email.').isEmail(),
    body('password','Password cannot be blank').exists(),
],async (req,res)=>{
    let success = false;
    // If there are errors, Return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            success = false;
            return res.status(400).json({success, error : "Please enter correct credentials" });  
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({success, error : "Please enter correct credentials" });
            }
        const data = {
            user: user.id,
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            success=true;
            res.json({success, authtoken});

    } catch (error) {
        console.error(error.message),
        res.status(500).send('Something went wrong')     
    }

})



//ROUTE 3: Get logged in user details using:POST "/api/auth/getuser"  Login required
router.post('/getuser', fetchuser ,async (req,res)=>{
try {
    userId = req.user
    const user = await User.findById(userId).select("-password")
    // console.log(user)
    res.send(user)
} catch (error) {
    console.error(error.message),
    res.status(500).send('Something went wrong')    
}

})

module.exports = router; 