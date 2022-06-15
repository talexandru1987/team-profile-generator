class Employee {
  constructor(name, id, email) {
    this.name = name || "DefaultName";
    this.id = id || "DefaultId";
    this.email = email || "default@email.com";
    this.role = "Employee";
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

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
