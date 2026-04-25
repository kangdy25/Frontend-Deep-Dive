export interface UIComponent {
  render(): void;
  add(component: UIComponent): void;
  remove(component: UIComponent): void;
}
