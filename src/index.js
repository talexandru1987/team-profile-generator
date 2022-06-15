const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

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
    // push manager class to array
    teamMembers.push(
      new Manager(
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
        teamMembers.push(
          new Engineer(
            memberInit.username,
            memberInit.employeeID,
            memberInit.email,
            memberDetails.userGitHub
          )
        );
      } else {
        //push the Intern class to the array
        teamMembers.push(
          new Intern(
            memberInit.username,
            memberInit.employeeID,
            memberInit.email,
            memberDetails.userSchool
          )
        );
      }
      //ask if a new member is needed
      stop = (await extraTeamMembers()).extraMember;
    }
  }
  console.log(teamMembers);
};
init();
