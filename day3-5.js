const express = require("express");
const bodyParser = require("body-parser");
const { pool } = require("./pg");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));

app.delete("/user/:rollNo", (req, res) => {
  try {
    const { rollNo } = req.params;

    // delete the user from the database
    const deleteQuery = "DELETE FROM student WHERE rollNo = $1";

    pool
      .query(deleteQuery, [rollNo])
      .then((r) => {
        return res.status(200).json({ message: "User deleted successfully" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ message: "Internal Server Error", error: error });
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
