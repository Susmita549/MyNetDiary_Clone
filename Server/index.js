const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app = express();
const cors = require('cors');
const connection = require('./db');
const authRouter = require('./router/auth.routes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server');
});
app.use(authRouter);
app.listen(port, async () => {
  try {
    await connection;
    console.log('database is connected successfully');
  } catch {
    console.log('error in loading database');
  }
  console.log(`server is lestning on port ${port}`);
});
