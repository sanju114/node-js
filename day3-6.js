const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const endpoint = req.url;

  console.log(`${timestamp} ${method} ${endpoint}`);

  next(); // Continue processing the request
});

// Define your API routes here
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
