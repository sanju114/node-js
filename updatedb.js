const client = require("./dbconnect");

const updateOne = async () => {
  try {
    const result = await client
      .db("employee")
      .collection("employeeData")
      .updateOne({ Name: "Shweeta" }, { $set: { Name: "Samruddhi" } });
    return result;
  } catch (err) {
    console.error(err);
  }
};

updateOne();
