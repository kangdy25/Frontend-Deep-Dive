import { Subject, Observer } from "./Interfaces";

export class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private news: string = "";

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    // 등록된 모든 옵저버에게 알림을 돌립니다.
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }

  public setNews(news: string): void {
    this.news = news;
    // 뉴스가 설정되자마자 알림 발송!
    this.notifyObservers();
  }
}
