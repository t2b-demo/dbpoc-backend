// const TortoiseDB = require('./tortoiseDB');
const TortoiseDB = require('./dist/tortoiseDB.min.js');

const db = new TortoiseDB({
  name: 'demo',
  port: 3000,
  mongoURI: 'mongodb://testuser:Passw0rd@35.159.30.70:27017/tortoisedb-demo',
  batchLimit: 1000
});

db.start();
