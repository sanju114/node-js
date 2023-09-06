const client = require("./dbconnect");

const deleteOne = async () => {
  try {
    const result = await client
      .db("employee")
      .collection("employeeData")
      .deleteOne({ Name: "Gita" });
    return result;
  } catch (err) {
    console.error(err);
  }
};

deleteOne();
