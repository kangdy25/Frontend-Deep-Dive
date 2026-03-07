export {};

// ✅ ISP를 적용한 코드

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Employee implements Workable, Eatable {
  public work(): void {
    console.log("Employee is working");
  }

  public eat(): void {
    console.log("Employee is eating");
  }
}

class Robot implements Workable {
  public work(): void {
    console.log("Robot is working");
  }
}

// --- 실행부 (Main) ---
const employee: Workable = new Employee();
employee.work();
(employee as unknown as Eatable).eat();

const robot: Workable = new Robot();
robot.work();
(robot as unknown as Eatable).eat(); // ⚠️ 런타임에서 에러가 발생합니다.
