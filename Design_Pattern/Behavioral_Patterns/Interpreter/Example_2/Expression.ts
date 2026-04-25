import { Context, Row } from "./Context";

export interface Expression {
  interpret(context: Context): Row[];
}

// WHERE 절 해석
export class WhereExpression implements Expression {
  constructor(
    private tableName: string,
    private column: string,
    private operator: string,
    private value: string,
  ) {}

  public interpret(context: Context): Row[] {
    const table = context.getTable(this.tableName);
    return table.filter((row) =>
      this.evaluate(row[this.column], this.operator, this.value),
    );
  }

  private evaluate(
    columnValue: string,
    operator: string,
    value: string,
  ): boolean {
    switch (operator) {
      case "=":
        return columnValue === value;
      case ">":
        return parseInt(columnValue) > parseInt(value);
      case "<":
        return parseInt(columnValue) < parseInt(value);
      default:
        return false;
    }
  }
}

// SELECT 문 해석
export class SelectExpression implements Expression {
  constructor(
    private tableName: string,
    private columns: string[],
    private whereClause: Expression | null,
  ) {}

  public interpret(context: Context): Row[] {
    const table = context.getTable(this.tableName);
    const result: Row[] = [];

    for (const row of table) {
      // 각 로우별로 임시 컨텍스트를 만들어 WHERE 절을 검사합니다.
      const rowContext = new Context();
      rowContext.setTable(this.tableName, [row]);

      if (
        !this.whereClause ||
        this.whereClause.interpret(rowContext).length > 0
      ) {
        const newRow: Row = {};
        for (const column of this.columns) {
          if (column === "*") {
            Object.assign(newRow, row);
          } else {
            newRow[column] = row[column];
          }
        }
        result.push(newRow);
      }
    }
    return result;
  }
}
