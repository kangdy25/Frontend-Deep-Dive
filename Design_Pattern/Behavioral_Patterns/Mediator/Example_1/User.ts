import { ChatMediator } from "./ChatMediator";

export abstract class User {
  constructor(
    protected mediator: ChatMediator,
    protected name: string,
  ) {}

  public abstract send(message: string): void;
  public abstract receive(message: string): void;
}

export class UserImpl extends User {
  constructor(mediator: ChatMediator, name: string) {
    super(mediator, name);
  }

  public send(message: string): void {
    console.log(`${this.name}: Sending Message = ${message}`);
    // 직접 다른 User를 부르는 게 아니라 중재자에게 맡깁니다.
    this.mediator.sendMessage(message, this);
  }

  public receive(message: string): void {
    console.log(`${this.name}: Received Message = ${message}`);
  }
}
