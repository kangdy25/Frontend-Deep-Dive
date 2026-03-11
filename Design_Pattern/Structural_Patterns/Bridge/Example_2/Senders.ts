import { MessageSender } from "./MessageSender";

export class EmailSender implements MessageSender {
  public sendMessage(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

export class SMSSender implements MessageSender {
  public sendMessage(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}
