const express = require('express');
// Linhas apenas de exemplo
const mySqlController = require('./controllers/mySql.controller.example');
const mongoController = require('./controllers/mongo.controller.example');

const router = express.Router();

// Linhas apenas de exemplo
router.get('/example/mysql', mySqlController.getAll);
router.get('/example/mongo', mongoController.getAll);

module.exports = router;