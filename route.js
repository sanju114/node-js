var express = require("express");
var app = express();
const client = require("./dbconnect");
var url = "mongodb://localhost:27017/employee";
const port = 7000;

app.get("/employee", async (req, res) => {
  try {
    const db = client.db();
    const collection = db.collection("employeeData");

    const data = await collection.find({}).toArray();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
