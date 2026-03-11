import { Message } from "./Message";
import { MessageSender } from "./MessageSender";

export class TextMessage extends Message {
  constructor(messageSender: MessageSender) {
    super(messageSender);
  }

  public send(message: string): void {
    this.messageSender.sendMessage(`Text Message: ${message}`);
  }
}

export class EncryptedMessage extends Message {
  constructor(messageSender: MessageSender) {
    super(messageSender);
  }

  private encrypt(message: string): string {
    // 타입스크립트(JS) 스타일로 문자열 뒤집기
    return message.split("").reverse().join("");
  }

  public send(message: string): void {
    const encrypted = this.encrypt(message);
    this.messageSender.sendMessage(`Encrypted Message: ${encrypted}`);
  }
}
