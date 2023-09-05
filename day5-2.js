const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const express = require("express");
port = 3000;
const app = express();
// get config vars
dotenv.config();

// sign with RSA SHA256
var privateKey = process.env.PRIVATE_KEY;
//var token = jwt.sign({ name: "sr" }, privateKey, { algorithm: "RS256" });

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

app.post("/api/createNewUser", (req, res) => {
  // ...

  const token = generateAccessToken({ username: req.body.username });
  res.json(token);

  // ...
});
// access config var

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log(process.env);
