import { useState } from "react";

const usePrice = (initialValue) => {
  const [price, setPriceAction] = useState(initialValue);

  const setPrice = (value) => {
    setPriceAction(Number(value));
  };

  return [price, setPrice];
};

const useDiscount = (initialValue) => {
  const [discount, setDiscountAction] = useState(initialValue);

  const setDiscount = (value) => {
    setDiscountAction(Number(value));
  };

  return [discount, setDiscount];
};

function PriceAndDiscount() {
  const [price, setPrice] = usePrice(10000);
  const [discount, setDiscount] = useDiscount(0.1);

  return (
    <>
      <input
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <input
        onChange={(event) => {
          setDiscount(event.target.value);
        }}
      />

      <p>할인된 가격: {price * (1 - discount)}원</p>
    </>
  );
}

function Page() {
  return (
    <>
      <PriceAndDiscount />
    </>
  );
}
