const fs = require("fs");
const inquirer = require("inquirer");

const employee = require("./Classes/employee");
const manager = require("./Classes/manager");
const engineer = require("./Classes/engineer");
const intern = require("./Classes/intern");


const generalQuestions = [
  {
    type: "input",
    message: "Type your name",
    name: "name",
  },
  {
    type: "input",
    message: "Type your ID",
    name: "id",
  },
  {
    type: "input",
    message: "Type your email",
    name: "email",
  },
  {
    type: "list",
    message: "What is your role?",
    name: "role",
    choices: ["Engineer", "Manager", "Intern"],
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Type your office number",
    name: "officenumber",
  },
  {
    type: "confirm",
    message: "Do you want to add another employee to the team",
    name: "addMore",
    default: true,
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Type your GitHub user",
    name: "github",
  },
  {
    type: "confirm",
    message: "Do you want to add another employee to the team",
    name: "addMore",
    default: true,
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Type your school",
    name: "school",
  },
  {
    type: "confirm",
    message: "Do you want to add another employee to the team",
    name: "addMore",
    default: true,
  },
];

function generateHTML() {
  console.log("This will generate your team's site");
}
// newEngineer = new Engineer("L", "1", "email@example.com", "githubuser", "Engineer");
// fs.writeFileSync("./public/team.html", generatehtml(teamArray));

function init() {
  inquirer
    .prompt(generalQuestions)
    .then((answers) => {
      if (answers.role === "Engineer") {
        engineerPrompt();
      } else if(answers.role === "Manager") {
        managerPrompt();
      } else {
      internPrompt();
    }
  })
};

function engineerPrompt() {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      if (answers.addMore === true) {
        init();
      } else {

      }
    })
}

function managerPrompt() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      if (answers.addMore === true) {
        init();
      } else {

      }
    })
}

function internPrompt() {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      if (answers.addMore === true) {
        init();
      } else {
        generateHTML();
      }
    })
}

init();