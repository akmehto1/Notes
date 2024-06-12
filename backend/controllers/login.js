const User = require('../models/user');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

const loginHandler = async (req, res) => {
  const {email,password}=req.body;


  console.log(req.body);
   const user=await User.findOne({email:email});
  
   

   if(!user)return res.status(404).json({message:"User Not Found or password is incorrect"});
    
   bcrypt.compare(password,user.password, (err, result) => {
    if (err) {
      console.error('Error comparing passwords:', err);
    } else if (result) {
      var token = jwt.sign({userid:user._id,key:user.key}, 'shhhhh');
      return res.status(201).json({ message: `User registered successfully`,token:token});
      console.log('Password is correct');
      // Proceed with your authentication logic
    } else {
      res.status(500).send({message:"User Enter wrong password"});
      console.log('Password is incorrect');
      // Handle incorrect password scenario
    }
  });

   
 
  

  //  res.status(200).json({user:user});

  
  
};

module.exports = loginHandler;
