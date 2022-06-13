class Employee {
  constructor(name, id, email) {
    this.name = name || "DefaultName";
    this.id = id || "DefaultId";
    this.email = email || "default@email.com";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
