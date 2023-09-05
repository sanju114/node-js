const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3000;
const pg = require("./pg");

// Dummy user data
// let users = [
//   { id: 1, name: "User 1" },
//   { id: 2, name: "User 2" },
//   { id: 3, name: "User 3" }
// ];

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const query = "SELECT * FROM users ORDER BY id DESC";
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
