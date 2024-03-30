import mysql, { Connection } from "mysql";

const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nextjs",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database successfully!");
});

export default connection;
