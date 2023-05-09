const employee = require("./employee");

class Intern extends employee {
  constructor (name, ID, email, school, role){
    super (name, ID, email);
    this.school = school;
    this.role = "Intern";

    this.getSchool = function(){
      return this.school;
    };
  };
}

module.exports = Intern;