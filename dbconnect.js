const { MongoClient, ServerApiVersion } = require("mongodb");
var url = "mongodb://localhost:27017/employee";

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function connectDb() {
  try {
    await client.connect();
    await client.db("employee").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}

connectDb();

module.exports = client;
