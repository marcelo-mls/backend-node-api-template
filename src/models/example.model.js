// Arquivo apenas de exemplo
const connection = require('./connection');

async function getAll() {
  const examples = await connection.execute(
    'SELECT * FROM table'
  );

  return examples;
}

module.exports = {
  getAll
};