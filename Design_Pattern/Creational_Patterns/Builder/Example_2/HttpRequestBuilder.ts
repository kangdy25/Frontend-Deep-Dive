import { HttpRequest } from "./HttpRequest";

export class HttpRequestBuilder {
  private headers: Map<string, string> = new Map();
  private parameters: Map<string, string> = new Map();
  private body?: string;

  // 필수 값인 method와 url은 생성자에서 강제합니다.
  constructor(
    private method: string,
    private url: string,
  ) {}

  public addHeader(key: string, value: string): this {
    this.headers.set(key, value);
    return this;
  }

  public addParameter(key: string, value: string): this {
    this.parameters.set(key, value);
    return this;
  }

  public setBody(body: string): this {
    this.body = body;
    return this;
  }

  // Getter들 (HttpRequest에서 사용)
  public getMethod(): string {
    return this.method;
  }
  public getUrl(): string {
    return this.url;
  }
  public getHeaders(): Map<string, string> {
    return this.headers;
  }
  public getParameters(): Map<string, string> {
    return this.parameters;
  }
  public getBody(): string | undefined {
    return this.body;
  }

  public build(): HttpRequest {
    return new HttpRequest(this);
  }
}
