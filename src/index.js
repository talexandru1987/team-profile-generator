const Team = require("../lib/Team");

const {
  rootQuestions,
  employeeDetails,
  officeNumber,
  extraTeamMembers,
} = require("../utils/questions");

const { writeToFile, cardGenerator } = require("../utils/utils");

const init = async () => {
  //the while loop variable
  let stop = true;
  //the team object array
  const teamMembers = new Team();

  //the first object will always be the team manager
  if (teamMembers.getMembers().length === 0) {
    //get the initial questions
    const managerInit = await rootQuestions();
    //get the office number
    const officeNo = await officeNumber();
    // push manager class to push to array
    teamMembers.addToMembers(
      teamMembers.createMember(
        managerInit.username,
        managerInit.employeeID,
        managerInit.email,
        officeNo.officeNumber
      )
    );
  }
  //check if you want to add team members
  const addTeam = await extraTeamMembers();

  if (addTeam.extraMember) {
    //cycle through the loop to get all the team members
    while (stop) {
      //get the initial set of questions
      let memberInit = await rootQuestions();
      //get the extra details
      let memberDetails = await employeeDetails();
      //check if intern or Engineer
      if (memberDetails.userRole === "Engineer") {
        //push the Engineer class to the array
        teamMembers.addToMembers(
          teamMembers.createMember(
            memberInit.username,
            memberInit.employeeID,
            memberInit.email,
            undefined,
            memberDetails.userGitHub,
            undefined
          )
        );
      } else {
        //push the Intern class to the array
        teamMembers.addToMembers(
          teamMembers.createMember(
            memberInit.username,
            memberInit.employeeID,
            memberInit.email,
            undefined,
            undefined,
            memberDetails.userSchool
          )
        );
      }
      //ask if a new member is needed
      stop = (await extraTeamMembers()).extraMember;
    }
  }

  //generate the html
  const generatedCards = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Generator</title>
  
      <script src="https://kit.fontawesome.com/316b4276d9.js" crossorigin="anonymous"></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
          <a class="navbar-brand" href="#">Team Name</a>
        </nav>
        <div class="container-fluid">
          <div class="row">${cardGenerator(teamMembers.getMembers())}</div>
        </div>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script src="./index.js"></script>
    </body>
  </html>`;
  //write to file
  writeToFile(generatedCards);
};
init();
