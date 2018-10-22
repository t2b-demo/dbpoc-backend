// const TortoiseDB = require('./tortoiseDB');
const TortoiseDB = require('./dist/tortoiseDB.min.js');

const db = new TortoiseDB({
  name: 'demo',
  port: 3000,
  mongoURI: 'mongodb://dbtest:Passw0rd@ec2-3-121-40-100.eu-central-1.compute.amazonaws.com:27017/tortoisedb-demo',
  batchLimit: 1000
});

db.start();
