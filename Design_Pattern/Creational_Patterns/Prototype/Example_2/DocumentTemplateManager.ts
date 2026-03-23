import { Document } from "./Interfaces";

export class DocumentTemplateManager {
  // 자바의 HashMap 대응으로 Map 객체를 사용합니다.
  private static templates: Map<string, Document> = new Map();

  public static addTemplate(name: string, doc: Document): void {
    this.templates.set(name, doc);
  }

  public static createDocument(templateName: string): Document {
    const template = this.templates.get(templateName);
    if (!template) {
      throw new Error(`Template not found: ${templateName}`);
    }
    // 원본을 건드리지 않고 복제본을 반환합니다.
    return template.clone();
  }
}
