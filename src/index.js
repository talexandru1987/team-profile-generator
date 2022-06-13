const {
  rootQuestions,
  employeeDetails,
  officeNumber,
  extraTeamMembers,
} = require("../utils/questions");

//the team object array
const teamMembers = [];

//the first object will always be the team manager
if (teamMembers.length === 0) {
  let managerInit = rootQuestions();

  managerInit.officeNumber = officeNumber();

  teamMembers.push(managerInit);
}
