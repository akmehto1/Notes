const User = require("../models/user");
const bcrypt = require("bcrypt");
const yup = require("yup");
var jwt = require('jsonwebtoken');
const mongoose=require('mongoose')

const signUpHandler = async (req, res, next) => {
  const { key,email, password, username, gender } = req.body;
  console.log(password);

  





  try {
    // Check if the user already exists with the provided email
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      // User with the same email already exists
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashpassword = bcrypt.hashSync(password, salt);
    const hashkey=bcrypt.hashSync(key,salt);

    

    // Create a new user
    const newUser = new User({
      email: email,
      password: hashpassword,
      username: username,
      gender: gender,
      key:hashkey
      // Remember to hash the password before saving (use bcrypt)
    });

    
   const user=newUser.save();

  res.status(200).send({message:"User signup"})
  
   

  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = signUpHandler;
