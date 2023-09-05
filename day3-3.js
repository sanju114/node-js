const express = require("express");
const bodyParser = require("body-parser");
const { pool } = require("./pg");

const app = express();
const port = 3000;

async function insertUser(id, first_name, last_name, gender, ctime) {
  try {
    const user = await db.one(
      "INSERT INTO users (id,first_name,last_name,gender,ctime) VALUES ($1, $2,$3,$4,$5) RETURNING *",
      [id, first_name, last_name, gender, ctime]
    );
    return user;
  } catch (error) {
    throw new Error("Error inserting user: " + error.message);
  }
}
