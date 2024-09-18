//user.models.js  best practice in industry same as user.js or user.model.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  //username: String,
  //email: String,
  //isActive: Boolean,
  // now using superPower of Mongoose which is used in high level industries

  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'password is required !'], // U can also give/set   custom msg
  },
}, {timestamps: true} ); // schema connect hota ha mongoDB me but now we don't have to try

export const User = mongoose.model('User', userSchema); // these 3 lines are compulsory in every model

/*
* schema is also used in many files
* these/this file automatically connects with data-base 
* for interview:
 "User" is converted into lowercase as well as in plural from like → users when its stored in data base basically its an standard practice 
*/

