const inquirer = require("inquirer");

const rootQuestions = async () => {
  // prompt questions
  const questions = [
    {
      type: "input",
      message: "Please enter your name:",
      name: "username",
      validate(answer) {
        if (!answer) {
          return "Name cannot be blank";
        }
        return true;
      },
    },
    {
      type: "input",
      message(answers) {
        return `Hi ${answers.username}.Please enter your employee ID:`;
      },
      name: "employeeID",
      validate(answer) {
        if (!answer) {
          return "ID cannot be blank";
        }
        return true;
      },
    },
    {
      type: "input",
      message(answers) {
        return `Hi ${answers.username}.Please enter your  email address:`;
      },
      name: "email",
      validate(answer) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(answer)) {
          return "You have to provide a valid email address!";
        }
        return true;
      },
    },
  ];
  const { username, employeeID, email } = await inquirer.prompt(questions);

  return { username, employeeID, email };
};

const officeNumber = async () => {
  // prompt question
  const questions = [
    {
      type: "input",
      message: "Please enter your office number",
      name: "officeNumber",
      validate(answer) {
        const emailRegex = /^[1-9]+[0-9]*$/;
        if (!emailRegex.test(answer)) {
          return "You have to provide a valid office number!";
        }
        return true;
      },
    },
  ];
  const { officeNumber } = await inquirer.prompt(questions);

  return { officeNumber };
};

const employeeDetails = async () => {
  // prompt question
  const questions = [
    {
      type: "list",
      message: "Please choose your role:",
      name: "userRole",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      message: "Please enter your GitHub username:",
      name: "userGitHub",
      when(answers) {
        return answers.userRole === "Engineer";
      },
      validate(answer) {
        if (!answer) {
          return "Username cannot be blank";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Please enter your school name:",
      name: "userSchool",
      when(answers) {
        return answers.userRole === "Intern";
      },
      validate(answer) {
        if (!answer) {
          return "School cannot be blank";
        }
        return true;
      },
    },
  ];
  const { userRole, userGitHub, userSchool } = await inquirer.prompt(questions);
  console.log({ userRole, userGitHub, userSchool });
  return { userRole, userGitHub, userSchool };
};

module.exports = {
  rootQuestions,
  employeeDetails,
  officeNumber,
};
