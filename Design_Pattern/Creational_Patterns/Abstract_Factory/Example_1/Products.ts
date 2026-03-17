// 추상 제품 인터페이스
export interface Button {
  paint(): void;
}

export interface Checkbox {
  paint(): void;
}

// Windows 제품군
export class WindowsButton implements Button {
  paint(): void {
    console.log("Rendering a button in Windows style");
  }
}

export class WindowsCheckbox implements Checkbox {
  paint(): void {
    console.log("Rendering a checkbox in Windows style");
  }
}

// MacOS 제품군
export class MacOSButton implements Button {
  paint(): void {
    console.log("Rendering a button in MacOS style");
  }
}

export class MacOSCheckbox implements Checkbox {
  paint(): void {
    console.log("Rendering a checkbox in MacOS style");
  }
}
