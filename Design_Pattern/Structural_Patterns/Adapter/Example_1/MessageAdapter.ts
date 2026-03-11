import { ModernMessageSender } from "./ModernMessageSender";
import { OldMessageSender } from "./OldMessageSender";

export class MessageAdapter implements ModernMessageSender {
  // 합성을 사용하여 구형 시스템을 내부에 품습니다.
  constructor(private oldSystem: OldMessageSender) {}

  public sendMessage(message: string, recipient: string): void {
    // 1. 최신 규격(매개변수 2개)을 구형 규격(배열 1개)으로 변환
    const messageData = [message, recipient];

    // 2. 구형 시스템 실행
    const result = this.oldSystem.send(messageData);

    // 3. 결과 처리 (신형 규격에 맞는 에러 처리 등)
    if (result !== 1) {
      console.log("Failed to send message");
    }
  }
}
