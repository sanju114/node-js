const fs = require("fs");
const readline = require("readline");

const filePath = `${__dirname}/a.txt`;

const readStream = fs.createReadStream(filePath, "utf8");
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity
});

let lineNumber = 0;

rl.on("line", (line) => {
  lineNumber++;

  if (lineNumber % 2 === 0) {
    console.log(line);
  }
});

rl.on("close", () => {
  console.log("File reading finished.");
});

rl.on("error", (error) => {
  console.error("Error reading the file: \n", error);
});
