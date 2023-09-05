const express = require("express");
const app = express();
const port = 3000;
const pg = require("./pg");
app.use(express.json());

// GET Profile API route
app.get("/profile/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const query = `
      SELECT users.id, users.first_name,currency
      FROM users
      INNER JOIN accounts ON users.id = accounts.id
      WHERE users.id = $1
    `;

    const result = await pg.client.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const profile = result.rows[0];
    // client.release();
    return res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
