const mongoose = require('mongoose');
require('dotenv').config();
const mongddb_url = process.env.MONGODB_URLS;
const connection = mongoose.connect(mongddb_url);

module.exports = connection;
