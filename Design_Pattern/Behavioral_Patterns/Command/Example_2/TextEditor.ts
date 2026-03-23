export class TextEditor {
  private content: string[] = [];

  public insertText(text: string, position: number): void {
    const textChars = text.split("");
    this.content.splice(position, 0, ...textChars);
  }

  public deleteText(position: number, length: number): void {
    this.content.splice(position, length);
  }

  public getTextSubstring(start: number, end: number): string {
    return this.content.slice(start, end).join("");
  }

  public getContent(): string {
    return this.content.join("");
  }
}
