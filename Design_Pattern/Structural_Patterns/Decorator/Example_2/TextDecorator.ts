import { Text } from "./Text";

// Base Decorator (추상 클래스)
export abstract class TextDecorator implements Text {
  constructor(protected decoratedText: Text) {}

  public getContent(): string {
    return this.decoratedText.getContent();
  }
}

// 굵게 장식
export class BoldDecorator extends TextDecorator {
  public getContent(): string {
    return `<b>${super.getContent()}</b>`;
  }
}

// 기울임 장식
export class ItalicDecorator extends TextDecorator {
  public getContent(): string {
    return `<i>${super.getContent()}</i>`;
  }
}

// 밑줄 장식
export class UnderlineDecorator extends TextDecorator {
  public getContent(): string {
    return `<u>${super.getContent()}</u>`;
  }
}
