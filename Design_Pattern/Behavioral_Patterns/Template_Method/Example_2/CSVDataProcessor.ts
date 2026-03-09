import { DataProcessor } from "./DataProcessor";

export class CSVDataProcessor extends DataProcessor {
  protected loadData(data: string): void {
    console.log(`Loading data from CSV file: ${data}`);
  }

  protected isValidData(data: string): boolean {
    return data !== null && data.includes("CSV");
  }

  protected processData(data: string): void {
    console.log("Processing CSV data");
  }

  protected saveData(data: string): void {
    console.log("Saving CSV data to database");
  }
}
