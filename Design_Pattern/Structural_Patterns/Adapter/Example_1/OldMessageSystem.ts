import { OldMessageSender } from "./OldMessageSender";

export class OldMessageSystem implements OldMessageSender {
  public send(messageData: string[]): number {
    console.log(
      `OldMessageSystem: Sending message: ${messageData[0]} to ${messageData[1]}`,
    );
    return 1;
  }
}
