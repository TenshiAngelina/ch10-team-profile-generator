const Engineer = require("../Classes/engineer");

describe("Engineer", () => {
  describe ("Testing getGithub from Engineer class", () => {
    it("getGithub should get the github of the employee", () => {
      const testEngineer = new Engineer ("Angelina", "001", "test@email.com", "TenshiAngelina", "Engineer");
    expect(testEngineer.getGithub() === "TenshiAngelina");      
    })
  })

  describe ("Testing getRole from Engineer class", () => {
    it("getRole should get the role of the employee", () => {
      const testEngineer = new Engineer ("Angelina", "001", "test@email.com", "TenshiAngelina", "Engineer");
    expect(testEngineer.getRole() === "Engineer");      
    })    
  })
  
})