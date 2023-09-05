const express = require("express");
const app = express();

function sendResponse(res, statusCode = 200, responseBody) {
  res.setHeader("Accept", "application/json");
  res.setHeader("Content-Type", "application/json");

  res.status(statusCode).json(responseBody);
}

app.get("/example", (req, res) => {
  const data = { message: "This is an example response." };
  sendResponse(res, 200, data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
