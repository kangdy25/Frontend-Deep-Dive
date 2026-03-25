import { Message, Subscriber } from "./Models";

export class Broker {
  // Map<토픽, 구독자 배열> 구조로 관리합니다.
  private subscribers: Map<string, Subscriber[]> = new Map();

  public subscribe(topic: string, subscriber: Subscriber): void {
    if (!this.subscribers.has(topic)) {
      this.subscribers.set(topic, []);
    }
    this.subscribers.get(topic)?.push(subscriber);
  }

  public publish(message: Message): void {
    const topic = message.getTopic();
    const topicSubscribers = this.subscribers.get(topic);

    if (topicSubscribers) {
      topicSubscribers.forEach((subscriber) => {
        subscriber.update(message);
      });
    }
  }
}
