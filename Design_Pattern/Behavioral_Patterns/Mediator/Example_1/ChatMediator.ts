import { User } from "./User";

export interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}

export class ChatMediatorImpl implements ChatMediator {
  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }

  public sendMessage(message: string, sender: User): void {
    // 메시지를 보낸 사람을 제외한 모든 사용자에게 메시지 전달
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(message);
      }
    }
  }
}
