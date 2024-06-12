const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passportLocalMongoose = require('passport-local-mongoose');

const enumgender=["Male","male","female","Female","Not"]

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  gender:{type:String,enum:enumgender},
  key:{type:String,required:true}
});



// Add passport-local-mongoose plugin to your schema
userSchema.plugin(passportLocalMongoose);



// // Hash the password before saving to the database
// userSchema.pre('save', function(next) {
//   const user = this;
//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) return next(err);

//       user.password = hash;
//       next();
//     });
//   });
// });

// // Verify password
// userSchema.methods.verifyPassword = function(candidatePassword) {
//   return bcrypt.compareSync(candidatePassword, this.password);
// };



const User = mongoose.model('User', userSchema);

module.exports = User;
