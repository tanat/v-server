const { Client } = require('pg');


const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_PORT } = process.env;

const client = new Client({
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
});

client.connect();

module.exports = client;
