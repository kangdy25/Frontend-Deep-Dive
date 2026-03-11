export interface ModernMessageSender {
  sendMessage(message: string, recipient: string): void;
}
