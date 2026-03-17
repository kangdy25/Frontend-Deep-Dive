import { Connection, Command, ResultSet } from "./Interfaces";

export class PostgreSQLConnection implements Connection {
  open(): void {
    console.log("Opening PostgreSQL connection");
  }
  close(): void {
    console.log("Closing PostgreSQL connection");
  }
}

export class PostgreSQLCommand implements Command {
  execute(query: string): void {
    console.log(`Executing PostgreSQL query: ${query}`);
  }
}

export class PostgreSQLResultSet implements ResultSet {
  getResults(): void {
    console.log("Getting results from PostgreSQL database");
  }
}
