const path = require('path');

const PORT = process.env.PORT || 5000;
const DB_DIR = path.resolve(__dirname, '../data');
const DB_PATH = path.join(DB_DIR, 'database.sqlite');

module.exports = {
  PORT,
  DB_DIR,
  DB_PATH
};
