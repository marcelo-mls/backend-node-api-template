const mongoose = require('mongoose');

async function connectToMongo() {
  mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('MongoDB successfully connected!'))
    .catch((error) => console.log('Error connecting to MongoDB\n', error));
}

module.exports = connectToMongo;
