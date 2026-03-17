import { Font } from "./Font";
import { ConcreteFont } from "./ConcreteFont";

export class FontFactory {
  private static fontMap: Map<string, Font> = new Map();

  public static getFont(font: string, size: number, color: string): Font {
    // 템플릿 리터럴을 사용해 유니크한 키 생성
    const key = `${font}-${size}-${color}`;
    let fontObject = this.fontMap.get(key);

    if (!fontObject) {
      fontObject = new ConcreteFont(font, size, color);
      this.fontMap.set(key, fontObject);
      console.log(`Creating new font object: [${key}]`);
    } else {
      console.log(`Reusing existing font object: [${key}]`);
    }

    return fontObject;
  }
}
