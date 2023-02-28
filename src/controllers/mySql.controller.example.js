// Arquivo apenas de exemplo
const model = require('../models/mySql.model.example');

async function getAll(_req, res) {
  const result = await model.getAll();
  
  return res.status(200).json(result);
}

module.exports = {
  getAll
};
