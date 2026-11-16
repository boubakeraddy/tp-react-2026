const { resetDatabase } = require('./database');

console.log('🔄 Resetting database to original state...');
resetDatabase();
console.log('✨ Database reset complete!');
process.exit(0);
