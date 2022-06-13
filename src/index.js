const inquirer = require("inquirer");

const {
  rootQuestions,
  employeeDetails,
  officeNumber,
  extraTeamMembers,
} = require("../utils/questions");

const init = async () => {
  //the while loop variable
  let stop = true;
  //the team object array
  const teamMembers = [];

  //the first object will always be the team manager
  if (teamMembers.length === 0) {
    //get the initial questions
    const managerInit = await rootQuestions();
    //get the office number
    const officeNo = await officeNumber();
    // push object to array
    teamMembers.push({ ...managerInit, ...officeNo });
  }
  //check if you want to add team members
  const addTeam = await extraTeamMembers();
  console.log(addTeam);
  if (addTeam.extraMember) {
    //cycle through the loop to get all the team members
    while (stop) {
      //get the initial set of questions
      let memberInit = await rootQuestions();
      //get the extra details
      let memberDetails = await employeeDetails();
      //push to the array
      teamMembers.push({ ...memberInit, ...memberDetails });
      //ask if a new member is needed
      stop = (await extraTeamMembers()).extraMember;
    }
  }
};
init();
