const Post = require("../models/post");
const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");
const  secretKey="hello";
const redis=require('../redis');
const { json } = require("express");


const post= async(req, resp) => {
  
  const chachedValue=await redis.get("notes");
  if (chachedValue){
    console.log("chachedValue");
    return resp.send(JSON.parse(chachedValue));
  }




  const allpost = await Post.find({ userid: req.userid });

   
  function decryptData(encryptedData, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    
    return bytes.toString(CryptoJS.enc.Utf8);
  }

   
  let encrpyptedpost=[];


  await allpost.forEach(data=>{
    const title=decryptData(data.title, secretKey);
    const description=decryptData(data.description, secretKey);
     
    encrpyptedpost.push({title, description});
  })

  redis.set("notes",JSON.stringify(encrpyptedpost));
  redis.expire('notes',10);




  return resp.send(encrpyptedpost);
};

const createPost = async (req, resp) => {
  const userid = req.userid;
  const key=req.key;
  console.log(key);

  const { title, description } = req.body;

  


  // Encrypt function
  function encryptData(data, secretKey) {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
  }

  const hashtitle=encryptData(title,"hello");
  const hashdescription=encryptData(description,"hello");
  
  

  try {
    const Note = new Post({
      title: hashtitle,
      description: hashdescription,
      userid: userid,
    });

    const user = await Note.save();

    return resp.status(200).send({ success: true, message: `Post Created` });
  } catch (err) {
    if (err) resp.status(400).json({ message: "Internal Server Error" });
    else resp.status(500).json({ message: "Error Creating the post" });
  }
};

const profile = (req, resp) => {
  return resp.send("Profile Here");
};


const delete_controller=async(req,resp)=>{
 const post_id=req.params.id;
 console.log("delete_controller");


 try{
  const delete_notes=await Post.findByIdAndDelete({_id:post_id});
  return resp.status(200).send("Delete Here");
 }catch(err){
  return resp.status(500).send({message:"Internal Serever Errro"})
 }

 

 



return resp.send("Delete");
}

module.exports = { post, profile, createPost,delete_controller};
