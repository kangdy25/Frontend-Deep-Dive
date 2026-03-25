import { EmailDeliveryService } from "./EmailDeliveryService";

export class MarketingDepartment {
  constructor(
    private emailService: EmailDeliveryService,
    private eventType: string,
  ) {}

  public launchCampaign(message: string): void {
    console.log(`\nLaunching campaign: ${message}`);
    this.emailService.sendEmails(this.eventType, message);
  }
}
