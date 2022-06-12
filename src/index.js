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

  console.log({ username, employeeID, email });
  return { username, employeeID, email };
};

module.exports = {
  rootQuestions,
};
