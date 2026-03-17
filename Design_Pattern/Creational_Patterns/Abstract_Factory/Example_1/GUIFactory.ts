import {
  Button,
  Checkbox,
  WindowsButton,
  WindowsCheckbox,
  MacOSButton,
  MacOSCheckbox,
} from "./Products";

// 추상 팩토리 인터페이스
export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Windows 전용 공장
export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

// MacOS 전용 공장
export class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOSButton();
  }
  createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}
