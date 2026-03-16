import { NewsAgency } from "./NewsAgency";
import { NewsChannel } from "./NewsChannel";

const agency = new NewsAgency();

const channel1 = new NewsChannel("Channel 1");
const channel2 = new NewsChannel("Channel 2");

// 구독 시작
agency.registerObserver(channel1);
agency.registerObserver(channel2);

// 첫 번째 뉴스 발행
agency.setNews("Breaking news: Observer Pattern in action!");

console.log("\n--- Channel 2 unsubscribing... ---");
agency.removeObserver(channel2);

// 두 번째 뉴스 발행
agency.setNews("Another update: Channel 2 unsubscribed.");
