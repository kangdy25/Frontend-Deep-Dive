import { EmailSender, SMSSender } from "./Senders";
import { TextMessage, EncryptedMessage } from "./Messages";

const emailSender = new EmailSender();
const smsSender = new SMSSender();

// 1. 이메일로 보내는 일반 텍스트 메시지
const textMsg = new TextMessage(emailSender);
textMsg.send("Hello World!");

// 2. SMS로 보내는 암호화 메시지
const encryptedMsg = new EncryptedMessage(smsSender);
encryptedMsg.send("Hello World!");
