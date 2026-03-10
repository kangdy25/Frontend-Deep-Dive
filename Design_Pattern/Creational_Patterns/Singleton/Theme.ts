export class Theme {
  private static instance: Theme | null = null;
  private themeColor: string;

  // private 생성자로 외부 인스턴스화 차단
  private constructor() {
    this.themeColor = "light";
  }

  // 유일한 인스턴스를 반환하는 static 메서드
  public static getInstance(): Theme {
    if (!Theme.instance) {
      Theme.instance = new Theme();
    }
    return Theme.instance;
  }

  public getThemeColor(): string {
    return this.themeColor;
  }

  public setThemeColor(color: string): void {
    this.themeColor = color;
  }
}
