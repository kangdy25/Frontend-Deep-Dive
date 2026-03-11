import { MessageSender } from "./MessageSender";

export abstract class Message {
  constructor(protected messageSender: MessageSender) {}

  public abstract send(message: string): void;
}
