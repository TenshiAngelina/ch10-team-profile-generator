const Manager = require("../Classes/manager");

describe("Manager", () => {
  describe ("Testing getGithub from manager class", () => {
    it("getOfficeNumber should get the office number of the employee", () => {
      const testManager = new Manager ("Angelina", "001", "test@email.com", "012345678", "Manager");
    expect(testManager.getOfficeNumber() === "012345678");      
    })
  })

  describe ("Testing getRole from Manager class", () => {
    it("getRole should get the role of the employee", () => {
      const testManager = new Manager ("Angelina", "001", "test@email.com", "012345678", "Manager");
    expect(testManager.getRole() === "Manager");      
    })    
  })
  
})