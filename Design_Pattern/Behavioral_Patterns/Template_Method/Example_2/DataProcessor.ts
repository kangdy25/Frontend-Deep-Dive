export abstract class DataProcessor {
  public process(data: string): void {
    this.loadData(data);

    if (this.isValidData(data)) {
      this.processData(data);
      this.saveData(data);
    } else {
      console.log("Data is invalid, processing aborted.");
    }
  }

  // 구체적인 단계들은 추상 메서드로 선언하여 자식이 구현하도록 합니다.
  protected abstract loadData(data: string): void;
  protected abstract isValidData(data: string): boolean;
  protected abstract processData(data: string): void;
  protected abstract saveData(data: string): void;
}
