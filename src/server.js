const app = require('./app');
require('dotenv').config();

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));