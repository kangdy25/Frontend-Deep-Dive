export {};

// ⛔️ OCP를 위반한 코드

class ReportGenerator {
  public generateReport(type: string): void {
    if (type === "PDF") {
      console.log("Generating PDF report...");
    } else if (type === "HTML") {
      console.log("Generating HTML report...");
    }
    // 새로운 형식을 추가하려면 이 메서드 내부를 수정해야 합니다. (OCP 위반 상태 유지)
  }
}

// 사용 예시
const generator = new ReportGenerator();
generator.generateReport("PDF");
generator.generateReport("HTML");
