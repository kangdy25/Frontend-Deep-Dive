import { EmailDeliveryService } from "./EmailDeliveryService";
import { MarketingDepartment } from "./MarketingDepartment";
import { IndividualCustomer } from "./IndividualCustomer";

async function main() {
  const emailService = new EmailDeliveryService();
  const marketing = new MarketingDepartment(emailService, "ProductLaunch");

  const customer1 = new IndividualCustomer("Customer 1");
  const customer2 = new IndividualCustomer("Customer 2");

  emailService.subscribe("ProductLaunch", customer1);
  emailService.subscribe("ProductLaunch", customer2);

  marketing.launchCampaign("New Product");

  // 실시간 구독자 추가 시나리오
  const customer3 = new IndividualCustomer("Customer 3");
  emailService.subscribe("ProductLaunch", customer3);

  marketing.launchCampaign("Update");

  // 모든 비동기 작업이 끝날 때까지 대기 (테스트용)
  await new Promise((resolve) => setTimeout(resolve, 10000));
  emailService.shutdown();
}

main();
