const employee = require("./employee");

class Manager extends employee {
  constructor (name, ID, email, officeNumber, role){
    super (name, ID, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";

    this.getOfficeNumber = function(){
      return this.officeNumber;
    };
  };
}

module.exports = Manager;