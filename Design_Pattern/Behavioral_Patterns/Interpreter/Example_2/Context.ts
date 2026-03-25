export type Row = Record<string, string>;

export class Context {
  private tables: Map<string, Row[]> = new Map();

  constructor() {
    // 샘플 데이터 초기화
    const users: Row[] = [
      { id: "1", name: "John", age: "30" },
      { id: "2", name: "Jane", age: "25" },
    ];
    this.tables.set("users", users);
  }

  public getTable(name: string): Row[] {
    return this.tables.get(name) || [];
  }

  public setTable(name: string, table: Row[]): void {
    this.tables.set(name, table);
  }
}
