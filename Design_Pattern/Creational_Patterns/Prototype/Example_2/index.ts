import { TextDocument } from "./TextDocument";
import { DocumentTemplateManager } from "./DocumentTemplateManager";

// 1. 템플릿 등록
DocumentTemplateManager.addTemplate(
  "welcome",
  new TextDocument("Welcome, {name}!"),
);
DocumentTemplateManager.addTemplate(
  "meeting",
  new TextDocument("Meeting scheduled on {date} at {time}"),
);

// 2. 웰컴 문서 생성 및 치환
const welcomeDoc = DocumentTemplateManager.createDocument("welcome");
welcomeDoc.setContent(welcomeDoc.getContent().replace("{name}", "John Doe"));
console.log("Welcome document: " + welcomeDoc.getContent());

// 3. 회의 문서 생성 및 치환
const meetingDoc = DocumentTemplateManager.createDocument("meeting");
meetingDoc.setContent(
  meetingDoc
    .getContent()
    .replace("{date}", "2026-03-23")
    .replace("{time}", "14:00"),
);
console.log("Meeting document: " + meetingDoc.getContent());
