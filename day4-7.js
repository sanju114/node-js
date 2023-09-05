const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/generate-file", (req, res) => {
  const fileContent = "This is the content of the file.";
  const fileName = "a.txt";

  //res.setHeader("Content-disposition", `attachment; filename="${fileName}"`);
  res.setHeader("Content-disposition", "inline");
  res.setHeader("Content-type", "text/plain");

  res.send(fileContent);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
