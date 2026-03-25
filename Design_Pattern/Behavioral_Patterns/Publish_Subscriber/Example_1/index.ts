import { Broker } from "./Broker";
import { NewsPublisher, NewsSubscriber } from "./ConcreteClasses";
import { Message } from "./Models";

const broker = new Broker();
const publisher = new NewsPublisher(broker);

const sub1 = new NewsSubscriber("Subscriber 1");
const sub2 = new NewsSubscriber("Subscriber 2");

// 토픽별 구독 설정
broker.subscribe("sports", sub1);
broker.subscribe("weather", sub2);
broker.subscribe("sports", sub2); // sub2는 스포츠와 날씨 둘 다 구독

// 메시지 발행
publisher.publish(new Message("Liverpool won the match", "sports"));
console.log("---");
publisher.publish(new Message("It's sunny today", "weather"));
