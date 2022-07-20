const express = require('express');
let authRouter = express.Router();
const UserModel = require('../model/user');
authRouter.post('/signup', async (req, res) => {
  // console.log(req.body.email);
  const result = await UserModel.find({ email: req.body.email });
  !result.length
    ? await new UserModel(req.body).save((err, sucess) => {
        if (err) {
          res.status(500).send({ message: 'Error occurred' });
        } else {
          res.status(201).send({ message: 'signup success' });
        }
      })
    : res.status(201).send({ message: 'email already exhist' });
});
authRouter.post('/login', async (req, res) => {
  const result = await UserModel.find(req.body);
  if (result.length > 0) {
    res.send(result);
  } else {
    res.status(201).send({ message: 'Wrong credentials' });
  }
});

module.exports = authRouter;

// "gender":"male",
// "date":"05/02/1994",
// "height":23,
// "curWeight":51,
// "targetWeight":56,
// "progress":4
