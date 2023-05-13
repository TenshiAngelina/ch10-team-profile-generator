const fs = require('fs');
const path = require('path');

function generateHTMLGeneralMember(member) {
  let roleSpecificData = '';
  if (member.role === 'Engineer') {
    roleSpecificData = `Github: ${member.github}`;
  } else if (member.role === 'Manager') {
    roleSpecificData = `Office Number: ${member.officeNumber}`;
  } else if (member.role === 'Intern') {
    roleSpecificData = `School: ${member.school}`;
  }

  return `
    <div class="card">
      <h2>${member.name}</h2>
      <h3>${member.role}</h3>
      <p>ID: ${member.id}</p>
      <p>Email: ${member.email}</p>
      <p>${roleSpecificData}</p>
    </div>
  `;
}

function generateHTML(teamMembers) {
  const cardsHTML = teamMembers.map(generateHTMLGeneralMember).join('\n');
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  </head>
  <body>
  
    <div class="container">
      <h1>Team</h1>
      <div class="card-container">
        ${cardsHTML}
      </div>
    </div>
  
    
  </body>
  
  </html>
  `;

}

module.exports = generateHTML;