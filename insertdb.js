const client = require("./dbconnect");

const insertOne = async () => {
  try {
    const result = await client
      .db("employee")
      .collection("employeeData")
      .insertMany([
        { Name: "Gita", Role: "Web" },
        { Name: "Raj", Role: "Data Analyst" },
        { Name: "Harshita", Role: "SAS" },
        { Name: "Vinit", Role: "Support" }
      ]);
    return result;
  } catch (err) {
    console.error(err);
  }
};

insertOne();
