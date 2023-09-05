const express = require("express");
const bodyParser = require("body-parser");
const { pool } = require("./pg");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));

// get route

app.get("/user-address", async (req, res) => {
  try {
    const getQuery = `SELECT address->>'street_addr' AS street_address, 
                       address->>'zip_code' AS zip_code
                       FROM Users
                       WHERE id = 1;`;
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
