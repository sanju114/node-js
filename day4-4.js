const express = require("express");
const { pool } = require("./pg");
const EventEmitter = require("events");
const app = express();
const port = 3000;

// Create a new event emitter
const eventEmitter = new EventEmitter();

eventEmitter.on("logUserCount", async () => {
  try {
    const result = await pool.query("SELECT COUNT(*) FROM users");
    const userCount = result.rows[0].count;
    console.log(`Number of Users table entries: ${userCount}`);
  } catch (error) {
    console.error("Error fetching user count:", error);
  }
});

eventEmitter.emit("logUserCount");
