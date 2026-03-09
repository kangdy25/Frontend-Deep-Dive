import { CSVDataProcessor } from "./CSVDataProcessor";
import { JSONDataProcessor } from "./JSONDataProcessor";

const csvProcessor = new CSVDataProcessor();
console.log("--- Starting CSV Process ---");
csvProcessor.process("My CSV data");

console.log("\n--- Starting JSON Process ---");
const jsonProcessor = new JSONDataProcessor();
jsonProcessor.process("XML data");
