require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 5000;

const connection = require("./db/dbConnection");

connection.connect((err) => {
  if (err) return console.error("Error connecting to MYSQL ", err);
  console.log("Connected with MYSQL..");
});

connection.query("USE coursemanagementsystem", (err) => {
  if (err) {
    console.error("Error selecting database:", err);
    return;
  }

  console.log("Database selected");
});

app.listen(port, () =>
  console.log(`server started at http://127.0.0.1:${port}`)
);
