require('express-async-errors');
const express = require('express');
const router = require('./router');
const connectToMongo = require('./database/mongoConnection');

const app = express();

app.use(express.json());
app.use(router);

connectToMongo();

module.exports = app;