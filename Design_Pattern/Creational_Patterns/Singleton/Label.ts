import { Theme } from "./Theme";

export class Label {
  constructor(private text: string) {}

  display(): void {
    const themeColor = Theme.getInstance().getThemeColor();
    console.log(`Label [${this.text}] displayed in ${themeColor} theme.`);
  }
}
