// Arquivo apenas de exemplo
const connection = require('./connection');

async function getAll() {
  const [result] = await connection.execute(
    'SELECT * FROM table_example'
  );

  return result;
}

module.exports = {
  getAll
};