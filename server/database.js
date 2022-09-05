const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "671973",
  host: "127.0.0.1",
  port: "5432",
  database: "perntodo",
});

module.exports = pool;

/*
const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

const pool = new Pool({
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: POSTGRES_DB,
});

module.exports = pool;

*/
