import knex from "knex";

const dbPort: number | undefined = process.env.DB_PORT
  ? parseInt(process.env.DB_PORT, 10)
  : undefined;

export const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: dbPort,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
