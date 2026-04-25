import { Publisher, Subscriber, Message } from "./Models";
import { Broker } from "./Broker";

export class NewsPublisher implements Publisher {
  constructor(private broker: Broker) {}

  public publish(message: Message): void {
    console.log(
      `[Publishing] "${message.getContent()}" on topic: ${message.getTopic()}`,
    );
    this.broker.publish(message);
  }
}

export class NewsSubscriber implements Subscriber {
  constructor(private name: string) {}

  public update(message: Message): void {
    console.log(
      `${this.name} received: "${message.getContent()}" [Topic: ${message.getTopic()}]`,
    );
  }
}
