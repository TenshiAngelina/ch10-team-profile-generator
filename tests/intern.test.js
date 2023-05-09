const Intern = require("../Classes/intern");

describe("Intern", () => {
  describe ("Testing getSchool from Intern class", () => {
    it("getSchool should get the school of the employee", () => {
      const testIntern = new Intern ("Roberto", "020", "roberto@email.com", "Toudai", "Intern");
    expect(testIntern.getSchool() === "Toudai");      
    })
  })

  describe ("Testing getRole from Intern class", () => {
    it("getRole should get the role of the employee", () => {
      const testIntern = new Intern ("Roberto", "020", "roberto@email.com", "Toudai", "Intern");
    expect(testIntern.getRole() === "Intern");      
    })    
  })
  
})