const express = require('express');
// Linha apenas de exemplo
const exampleController = require('./controllers/example.controller');

const router = express.Router();

// Linha apenas de exemplo
router.get('/example', exampleController.getAll);

module.exports = router;