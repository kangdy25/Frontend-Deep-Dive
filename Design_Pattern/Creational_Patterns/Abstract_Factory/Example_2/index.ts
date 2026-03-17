import { DatabaseFactory, Connection, Command, ResultSet } from "./Interfaces";
import { MySQLFactory, PostgreSQLFactory } from "./Factories";

class DatabaseClient {
  private connection: Connection;
  private command: Command;
  private resultSet: ResultSet;

  constructor(factory: DatabaseFactory) {
    // 팩토리가 제공하는 '일관된 제품 세트'를 주입받음
    this.connection = factory.createConnection();
    this.command = factory.createCommand();
    this.resultSet = factory.createResultSet();
  }

  public performDatabaseOperations(): void {
    this.connection.open();
    this.command.execute("SELECT * FROM users");
    this.resultSet.getResults();
    this.connection.close();
  }
}

// 실행부
const mysqlClient = new DatabaseClient(new MySQLFactory());
mysqlClient.performDatabaseOperations();

console.log("\nSwitching to PostgreSQL...\n");

const postgresClient = new DatabaseClient(new PostgreSQLFactory());
postgresClient.performDatabaseOperations();
