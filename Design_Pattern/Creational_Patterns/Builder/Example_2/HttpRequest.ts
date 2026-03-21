import { HttpRequestBuilder } from "./HttpRequestBuilder";

export class HttpRequest {
  private method: string;
  private url: string;
  private headers: Map<string, string>;
  private parameters: Map<string, string>;
  private body?: string; // 바디는 선택사항

  constructor(builder: HttpRequestBuilder) {
    this.method = builder.getMethod();
    this.url = builder.getUrl();
    this.headers = builder.getHeaders();
    this.parameters = builder.getParameters();
    this.body = builder.getBody();
  }

  public toString(): string {
    // Map을 객체 형태로 변환하여 출력하기 편하게 만듭니다.
    const headersObj = Object.fromEntries(this.headers);
    const paramsObj = Object.fromEntries(this.parameters);

    return `HttpRequest [method=${this.method}, url=${this.url}, headers=${JSON.stringify(
      headersObj,
    )}, parameters=${JSON.stringify(paramsObj)}, body=${this.body}]`;
  }
}
