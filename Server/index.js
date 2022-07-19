const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app = express();
console.log(port);
app.use(express.json());
app.get('/', (req, res) => {
  res.send('server');
});
app.listen(port, () => {
  console.log(`server is lestning on port ${port}`);
});
