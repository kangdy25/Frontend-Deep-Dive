// 추상 제품들
export interface Connection {
  open(): void;
  close(): void;
}

export interface Command {
  execute(query: string): void;
}

export interface ResultSet {
  getResults(): void;
}

// 추상 팩토리
export interface DatabaseFactory {
  createConnection(): Connection;
  createCommand(): Command;
  createResultSet(): ResultSet;
}
