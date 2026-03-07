export {};

// ⛔️ ISP를 위반한 코드

interface Worker {
  work(): void;
  eat(): void;
}

class Employee implements Worker {
  public work(): void {
    console.log("Employee is working");
  }

  public eat(): void {
    console.log("Employee is eating");
  }
}

class Robot implements Worker {
  public work(): void {
    console.log("Robot is working");
  }

  public eat(): void {
    throw new Error("Robots do not eat");
  }
}

const employee: Worker = new Employee();
employee.work(); // Employee is working
employee.eat(); // Employee is eating

const robot: Worker = new Robot();
robot.work(); // Robot is working

try {
  robot.eat(); // Error: Robots do not eat
} catch (e) {
  console.error((e as Error).message);
}
