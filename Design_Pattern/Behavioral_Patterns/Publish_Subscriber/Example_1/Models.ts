export class Message {
  constructor(
    private readonly content: string,
    private readonly topic: string,
  ) {}

  public getContent(): string {
    return this.content;
  }
  public getTopic(): string {
    return this.topic;
  }
}

export interface Publisher {
  publish(message: Message): void;
}

export interface Subscriber {
  update(message: Message): void;
}
