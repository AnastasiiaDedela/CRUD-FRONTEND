import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD, PG_PORT } = process.env;

const db = new pg.Client({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
});
db.connect();
db.on("error", (err) => {
  console.error("Unexpected error", err);
  process.exit(-1);
});
export const query = (text, params) => db.query(text, params);
