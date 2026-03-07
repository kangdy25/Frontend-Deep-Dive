export {};

// ✅ OCP를 적용한 코드

interface Report {
  generate(): void;
}

class PDFReport implements Report {
  public generate(): void {
    console.log("Generating PDF report...");
  }
}

class HTMLReport implements Report {
  public generate(): void {
    console.log("Generating HTML report...");
  }
}

class XMLReport implements Report {
  public generate(): void {
    console.log("Generating XML report...");
  }
}

const pdfReport: Report = new PDFReport();
const htmlReport: Report = new HTMLReport();
const xmlReport: Report = new XMLReport();

pdfReport.generate();
htmlReport.generate();
xmlReport.generate();
