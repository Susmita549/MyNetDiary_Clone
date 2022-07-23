const express = require('express');
let authRouter = express.Router();
const UserModel = require('../model/user');
authRouter.post('/signup', async (req, res) => {
  console.log(req.body);
  const result = await UserModel.find({ email: req.body.email });
  // console.log(result);
  !result.length
    ? await new UserModel(req.body).save((err, sucess) => {
        if (err) {
          res.status(500).send({ message: 'Error occurred' });
        } else {
          res.status(201).send(sucess);
        }
      })
    : res.status(201).send({ message: 'email already exhist or not found' });
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
