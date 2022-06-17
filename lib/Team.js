const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("./Employee");

class Team {
  constructor() {
    this.members = [];
  }
  // create a class instance
  createMember(name, id, email, officeNumber = "", githubUsername = "", school = "") {
    let result = "";
    if (officeNumber) {
      //create manager
      result = new Manager(name, id, email, officeNumber);
    } else if (githubUsername) {
      //create engineer
      result = new Engineer(name, id, email, githubUsername);
    } else if (school) {
      //create intern
      result = new Intern(name, id, email, school);
    } else {
      //to prevent an undefined error create a default class of employee
      result = new Employee(name, id, email);
    }
    return result;
  }

  //add a class instance to the array of members
  addToMembers(instance) {
    this.members.push(instance);
  }

  //return the content  of the members array
  getMembers() {
    return this.members;
  }
}

module.exports = Team;
