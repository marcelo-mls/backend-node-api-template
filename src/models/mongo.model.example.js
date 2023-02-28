// Arquivo apenas de exemplo
const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const exampleSchema = new Schema({
  column_example: { 
    type: String,
    required: true 
  }
},
{ timestamps: true });

const ModelExample = model('examples', exampleSchema);

module.exports = ModelExample;