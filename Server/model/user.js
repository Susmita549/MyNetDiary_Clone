const mongoose = require('mongoose');

const UserScema = mongoose.Schema({
  name: { type: String },
  email: { type: String, require },
  pass: { type: String, require },
  gender: String,
  date: String,
  height: String,
  curWeight: Number,
  targetWeight: Number,
  progress: Number,
});
const UserModel = mongoose.model('user', UserScema);
module.exports = UserModel;
