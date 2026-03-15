import { FinancialInfo } from "./FinancialInfo";
import {
  CreditCardPaymentFactory,
  PayPalPaymentFactory,
  BankTransferPaymentFactory,
  PaymentFactory,
} from "./PaymentFactory";

const userInfo = new FinancialInfo(
  "1234-5678-9012-3456",
  "user@example.com",
  "987654321",
);

let factory: PaymentFactory;

// 1. 신용카드 결제
factory = new CreditCardPaymentFactory();
let payment = factory.createPayment(userInfo);
payment.processPayment(100.0);

// 2. 페이팔 결제
factory = new PayPalPaymentFactory();
payment = factory.createPayment(userInfo);
payment.processPayment(200.0);

// 3. 계좌 이체 결제
factory = new BankTransferPaymentFactory();
payment = factory.createPayment(userInfo);
payment.processPayment(300.0);
