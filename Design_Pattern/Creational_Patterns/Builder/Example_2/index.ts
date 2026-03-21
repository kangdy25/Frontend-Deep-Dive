import { HttpRequestBuilder } from "./HttpRequestBuilder";

// 1. GET 요청 생성
const getRequest = new HttpRequestBuilder("GET", "https://example.com/api")
  .addHeader("Authorization", "Bearer token")
  .addParameter("query", "builder-pattern")
  .build();

// 2. POST 요청 생성
const postRequest = new HttpRequestBuilder("POST", "https://example.com/api")
  .addHeader("Authorization", "Bearer token")
  .setBody(JSON.stringify({ name: "John", age: 30 }))
  .build();

console.log(getRequest.toString());
console.log(postRequest.toString());
