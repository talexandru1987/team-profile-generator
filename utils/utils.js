const fs = require("fs");

//this function will write data to a file
const writeToFile = (filePath, payload) => {
  // write data to file
  fs.writeFileSync(filePath, payload);
};

// export task here
module.exports = {
  readFromFile,
  writeToFile,
};
