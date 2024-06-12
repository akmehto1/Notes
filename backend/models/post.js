const mongoose = require('mongoose');

const {encryptData}=require('../EncryptionAlgo/ecryption');


// Define the schema
const postSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  userid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: { type: Date, default: Date.now },

},{timestamp:true});


// postSchema.pre('save', function (next) {
//   this.title = encryptData(this.title, 'yourSecretKey');
//   this.content = encryptData(this.content, 'yourSecretKey');
//   next();
// });


// postSchema.post('find', function (result) {
//   console.log(result);
//   // result.forEach(doc => {
//   //   doc.encryptedField = decryptData(doc.encryptedField, 'yourSecretKey');
//   // });
// });




// Create a model using the schema
const Post = mongoose.model('Post', postSchema);

// Export the model
module.exports = Post;


