import { DatabaseFactory, Connection, Command, ResultSet } from "./Interfaces";
import { MySQLConnection, MySQLCommand, MySQLResultSet } from "./MySQLProducts";
import {
  PostgreSQLConnection,
  PostgreSQLCommand,
  PostgreSQLResultSet,
} from "./PostgreSQLProducts";

export class MySQLFactory implements DatabaseFactory {
  createConnection(): Connection {
    return new MySQLConnection();
  }
  createCommand(): Command {
    return new MySQLCommand();
  }
  createResultSet(): ResultSet {
    return new MySQLResultSet();
  }
}

export class PostgreSQLFactory implements DatabaseFactory {
  createConnection(): Connection {
    return new PostgreSQLConnection();
  }
  createCommand(): Command {
    return new PostgreSQLCommand();
  }
  createResultSet(): ResultSet {
    return new PostgreSQLResultSet();
  }
}
