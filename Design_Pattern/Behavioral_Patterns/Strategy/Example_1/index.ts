import { ShoppingCart } from "./ShoppingCart";
import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";

const cart = new ShoppingCart();

// 1. 신용카드 결제 전략 선택
cart.setPaymentStrategy(
  new CreditCardPayment("John Doe", "1234-5678-9012-3456"),
);
cart.checkout(100); // 100 paid with credit card

// 2. 페이팔 결제 전략으로 동적 교체
cart.setPaymentStrategy(new PayPalPayment("johndoe@example.com"));
cart.checkout(200); // 200 paid using PayPal
