const fs = require("fs");
const path = require("path");

//this function will write data to a file
const writeToFile = (generatedMarkup) => {
  const filePath = path.join(__dirname, "../dist/index.html");
  // write data to file
  fs.writeFileSync(filePath, generatedMarkup);
};

const cardGenerator = (objectsArray) => {
  let displayCards = objectsArray
    .map((eachObject) => {
      //if Manager

      if (eachObject.getRole() === "Manager") {
        //create a manager card
        return ` <!-- card start -->
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-primary">
          ${eachObject.getName()} <br />
            <i class="fa-solid fa-mug-hot"></i> ${eachObject.getRole()}
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${eachObject.getId()}</li>
            <li class="list-group-item">Email: ${eachObject.getEmail()}</li>
            <li class="list-group-item">Office number: ${eachObject.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
      <!-- card end -->`;
      } else if (eachObject.getRole() === "Engineer") {
        //create an engineer card
        return ` <!-- card start -->
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-primary">
          ${eachObject.getName()}  <br />
            <i class="fa-solid fa-glasses"></i> ${eachObject.getRole()}
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${eachObject.getId()}</li>
            <li class="list-group-item">Email: ${eachObject.getEmail()}</li>
            <li class="list-group-item">GitHub: ${eachObject.getGithub()}</li>
          </ul>
        </div>
      </div>
      <!-- card end -->`;
      } else if (eachObject.getRole() === "Intern") {
        //create an Intern card
        return ` <!-- card start -->
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-primary">
          ${eachObject.getName()}  <br />
            <i class="fa-solid fa-graduation-cap"></i> ${eachObject.getRole()}
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${eachObject.getId()}</li>
            <li class="list-group-item">Email: ${eachObject.getEmail()}</li>
            <li class="list-group-item">School: ${eachObject.getSchool()}</li>
          </ul>
        </div>
      </div>
      <!-- card end -->`;
      }
    })
    .join("");

  return displayCards;
};

// export task here
module.exports = {
  writeToFile,
  cardGenerator,
};
