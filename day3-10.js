const express = require("express");
const { pool } = require("./pg");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));

app.delete("/deleteData", async (req, res) => {
  // Start a transaction
  await pool.query("BEGIN");

  try {
    const { rollNo } = req.params;
    await pool.query("DELETE FROM student WHERE rollNo = 1");

    await pool.query("COMMIT");

    res.json({ message: "Deletion successful" });
  } catch (error) {
    await pool.query("ROLLBACK");
    res
      .status(500)
      .json({ error: `Deletion failed: ${error.message || error}` });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
