const employee = require("./employee");

class Engineer extends employee {
  constructor (name, ID, email, github, role){
    super (name, ID, email);
    this.github = github;
    this.role = "Engineer";

    this.getGithub = function(){
      return this.github;
    };
  };
}

module.exports = Engineer;