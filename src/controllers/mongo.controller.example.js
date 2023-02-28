// Arquivo apenas de exemplo
const ModelExample = require('../models/mongo.model.example');

async function getAll(_req, res) {
  const result = await ModelExample.find();
  
  return res.status(200).json(result);
}

module.exports = {
  getAll
};