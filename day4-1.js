const express = require("express");
const bodyParser = require("body-parser");
const { pool } = require("./pg");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));

// get route

app.get("/users-profile", async (req, res) => {
  try {
    const getQuery = `select user_name, count(distinct department_name) AS total_departments
    FROM department GROUP BY user_name`;
    const result = await pool.query(getQuery);
    return res
      .status(200)
      .json({ message: "Data Displayed successfully", data: result.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
