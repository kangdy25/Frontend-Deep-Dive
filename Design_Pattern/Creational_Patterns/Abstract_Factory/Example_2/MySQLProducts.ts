import { Connection, Command, ResultSet } from "./Interfaces";

export class MySQLConnection implements Connection {
  open(): void {
    console.log("Opening MySQL connection");
  }
  close(): void {
    console.log("Closing MySQL connection");
  }
}

export class MySQLCommand implements Command {
  execute(query: string): void {
    console.log(`Executing MySQL query: ${query}`);
  }
}

export class MySQLResultSet implements ResultSet {
  getResults(): void {
    console.log("Getting results from MySQL database");
  }
}
