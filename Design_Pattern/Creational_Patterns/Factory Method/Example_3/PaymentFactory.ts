import { Payment } from "./Payment";
import { FinancialInfo } from "./FinancialInfo";
import {
  CreditCardPayment,
  PayPalPayment,
  BankTransferPayment,
} from "./Payments";

// 추상 팩토리 클래스
export abstract class PaymentFactory {
  abstract createPayment(info: FinancialInfo): Payment;
}

// 신용카드 공장
export class CreditCardPaymentFactory extends PaymentFactory {
  createPayment(info: FinancialInfo): Payment {
    return new CreditCardPayment(info.creditCardNumber);
  }
}

// 페이팔 공장
export class PayPalPaymentFactory extends PaymentFactory {
  createPayment(info: FinancialInfo): Payment {
    return new PayPalPayment(info.payPalEmail);
  }
}

// 계좌 이체 공장
export class BankTransferPaymentFactory extends PaymentFactory {
  createPayment(info: FinancialInfo): Payment {
    return new BankTransferPayment(info.bankAccountNumber);
  }
}
