import { GUIFactory } from "./GUIFactory";
import { Button, Checkbox } from "./Products";

export class Application {
  private button: Button;
  private checkbox: Checkbox;

  // 생성자에서 구체적인 공장을 주입(Dependency Injection)받습니다.
  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  public paint(): void {
    this.button.paint();
    this.checkbox.paint();
  }
}
