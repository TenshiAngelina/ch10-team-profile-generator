const Employee = require("../Classes/employee");

describe("Employee", () => {
  describe ("Testing getName from Employee class", () => {
    it("getName should get the name of the employee", () => {
      const testEmployee = new Employee ("Angelina", "001", "test@email.com", "Manager");
    expect(testEmployee.getName() === "Angelina");      
    })
  })

  describe ("Testing getId from Employee class", () => {
    it("getId should get the ID of the employee", () => {
      const testEmployee = new Employee ("Angelina", "001", "test@email.com", "Manager");
    expect(testEmployee.getId() === "001");      
    })    
  })

  describe ("Testing getEmail from Employee class", () => {
    it("getEmail should get the email of the employee", () => {
      const testEmployee = new Employee ("Angelina", "001", "test@email.com", "Manager");
    expect(testEmployee.getEmail() === "test@email.com");      
    })
  })

  describe ("Testing getRole from Employee class", () => {
    it("getRole should get the role of the employee", () => {
      const testEmployee = new Employee ("Angelina", "001", "test@email.com", "Manager");
    expect(testEmployee.getRole() === "Manager");      
    })
  })
  
})