const express = require('express');
let authRouter = express.Router();
const UserModel = require('../model/user');
authRouter.post('/signup', async (req, res) => {
  const result = await new UserModel(req.body);
  result.save((err, sucess) => {
    if (err) {
      res.status(500).send({ message: 'Error occurred' });
    } else {
      res.status(201).send({ message: 'signup success' });
    }
  });
});
authRouter.post('/login', (req, res) => {
  res.send('login users');
});

module.exports = authRouter;

// "gender":"male",
// "date":"05/02/1994",
// "height":23,
// "curWeight":51,
// "targetWeight":56,
// "progress":4
