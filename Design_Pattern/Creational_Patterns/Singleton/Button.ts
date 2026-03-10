import { Theme } from "./Theme";

export class Button {
  constructor(private label: string) {}

  display(): void {
    const themeColor = Theme.getInstance().getThemeColor();
    console.log(`Button [${this.label}] displayed in ${themeColor} theme.`);
  }
}
