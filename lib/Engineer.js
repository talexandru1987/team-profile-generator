const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email);

    this.githubUsername = githubUsername || "@default";
    this.role = "Engineer";
  }

  getGithub() {
    return this.githubUsername;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
