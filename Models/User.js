const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
        validator: (value) => isEmail(value),
        message: 'Invalid email address',
      },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum:['admin', 'user'],
    default: "user",
  },
 
},
{
  timestamps: true, 
  versionKey:false
});

const User = mongoose.model('User', userSchema);

module.exports = User;
