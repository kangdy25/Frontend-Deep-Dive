import { UIComponent } from "./UIComponent";

export class Panel implements UIComponent {
  private components: UIComponent[] = [];

  constructor(private name: string) {}

  public render(): void {
    console.log(`Panel: ${this.name}`);
    this.components.forEach((comp) => comp.render());
  }

  public add(component: UIComponent): void {
    this.components.push(component);
  }

  public remove(component: UIComponent): void {
    this.components = this.components.filter((comp) => comp !== component);
  }
}

export class Window implements UIComponent {
  private components: UIComponent[] = [];

  constructor(private title: string) {}

  public render(): void {
    console.log(`Window: ${this.title}`);
    this.components.forEach((comp) => comp.render());
  }

  public add(component: UIComponent): void {
    this.components.push(component);
  }

  public remove(component: UIComponent): void {
    this.components = this.components.filter((comp) => comp !== component);
  }
}
