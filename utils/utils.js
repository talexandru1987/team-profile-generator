const fs = require("fs");

//this function will write data to a file
const writeToFile = (filePath, payload) => {
  // write data to file
  fs.writeFileSync(filePath, payload);
};

const cardGenerator = (objectsArray) => {
  const displayCards = objectsArray
    .map((eachObject) => {
      //if Manager
      if (eachObject.getRole() === "Manager") {
        //create a manager card
        const manager = ` <!-- card start -->
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-primary">
            Alex <br />
            <i class="fa-solid fa-mug-hot"></i> Manager
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">Office number:</li>
          </ul>
        </div>
      </div>
      <!-- card end -->`;
      } else if (eachObject.getRole() === "Engineer") {
        //create an engineer card
        const engineer = ` <!-- card start -->
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-primary">
            Alex <br />
            <i class="fa-solid fa-glasses"></i> Engineer
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">Office number:</li>
          </ul>
        </div>
      </div>
      <!-- card end -->`;
      } else if (eachObject.getRole() === "Intern") {
        //create an Intern card
        const intern = ` <!-- card start -->
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-primary">
            Alex <br />
            <i class="fa-solid fa-graduation-cap"></i> In
          </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">Office number:</li>
          </ul>
        </div>
      </div>
      <!-- card end -->`;
      }
    })
    .join("");

  console.log(`the cards are: ${displayCards}`);

  return displayCards;
};

// export task here
module.exports = {
  writeToFile,
  cardGenerator,
};
