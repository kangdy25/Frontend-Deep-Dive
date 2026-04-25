import { Expression, SelectExpression, WhereExpression } from "./Expression";

export class SQLParser {
  public static parse(query: string): Expression {
    const parts = query.split(/\s+/);
    if (parts[0].toUpperCase() !== "SELECT") {
      throw new Error("Only SELECT statements are supported");
    }

    const columns = parts[1].split(",");
    const tableName = parts[3];

    let whereClause: Expression | null = null;
    if (parts.length > 4 && parts[4].toUpperCase() === "WHERE") {
      whereClause = new WhereExpression(
        tableName,
        parts[5],
        parts[6],
        parts[7],
      );
    }

    return new SelectExpression(tableName, columns, whereClause);
  }
}
