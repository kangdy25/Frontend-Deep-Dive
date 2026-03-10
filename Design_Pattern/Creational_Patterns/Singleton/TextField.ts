import { Theme } from "./Theme";

export class TextField {
  constructor(private text: string) {}

  display(): void {
    const themeColor = Theme.getInstance().getThemeColor();
    console.log(`TextField [${this.text}] displayed in ${themeColor} theme.`);
  }
}
