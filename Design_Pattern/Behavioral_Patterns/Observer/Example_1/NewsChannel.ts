import { Observer } from "./Interfaces";

export class NewsChannel implements Observer {
  constructor(private name: string) {}

  public update(news: string): void {
    console.log(`${this.name} received news: ${news}`);
  }
}
