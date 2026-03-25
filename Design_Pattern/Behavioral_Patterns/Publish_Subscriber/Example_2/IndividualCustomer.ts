import { Customer } from "./Interfaces";

export class IndividualCustomer implements Customer {
  constructor(private name: string) {}

  public async receiveEmail(message: string): Promise<void> {
    console.log(`${this.name} is receiving email async: ${message}`);

    // 비동기 이메일 읽기 시간 시뮬레이션 (5초)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log(`${this.name} finished reading email: ${message}`);
  }
}
