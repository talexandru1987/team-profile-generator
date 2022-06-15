const fs = require("fs");

//this function will write data to a file
const writeToFile = (filePath, payload) => {
  // write data to file
  fs.writeFileSync(filePath, payload);
};




const cardGenerator = (objectsArray) {
  const displayCards = objectsArray.map((eachObject) => {
    //if Manager
    if(eachObject.getRole() === "Manager"){
      //create a manager card
    }else if(eachObject.getRole() === "Engineer"){
      //create an engineer card

    }else if(eachObject.getRole() === "Intern"){
      //create an Intern card

    }

  }).join("") 
}

// export task here
module.exports = {
  writeToFile,
};
