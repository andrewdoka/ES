class Employee {
    constructor(title) {

      if (!title) {
        throw new Error("You are missing the title.");
      }

     Employee.lastId++;
     this.id = Order.lastId;
      this.title = title
      
    }}
    
    Employee.lastId = 0;
    module.exports = Employee;