const Employee = require("./Employee");

class engineers extends Employee {
  constructor(name, email, git) {
    super("engineer");
    this.name = name;
    this.email = email;
    this.git = git;
  }

  titleLog() {
    console.log(this.title);
  }

  checkPassengerLength() {
    if (this.id.length > 4) {
      console.log("Id is a 4 digit number");
    } else {
      console.log(`ID accepted since its  ${this.id.length} long.`);
    }
  }
}

