import { DataProcessor } from "./DataProcessor";

export class JSONDataProcessor extends DataProcessor {
  protected loadData(data: string): void {
    console.log(`Loading data from JSON file: ${data}`);
  }

  protected isValidData(data: string): boolean {
    return data !== null && data.includes("JSON");
  }

  protected processData(data: string): void {
    console.log("Processing JSON data");
  }

  protected saveData(data: string): void {
    console.log("Saving JSON data to database");
  }
}
