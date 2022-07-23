const mongoose = require('mongoose');

const UserScema = mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  gender: String,
  date: String,
  height: String,
  curWeight: String,
  targetWeight: String,
  progress: String,
});
const UserModel = mongoose.model('user', UserScema);
module.exports = UserModel;
