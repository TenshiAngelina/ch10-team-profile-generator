class Employee {
  constructor(name, ID, email, role) {
    this.name = name;
    this.id = ID;
    this.email = email;
    this.role = role;

    this.getName = function () {
      return this.name;
    };
    this.getId = function () {
      return this.id;
    };
    this.getEmail = function () {
      return this.email;
    };
    this.getRole = function () {
      return this.role;
    };
  }
}

module.exports = Employee;
