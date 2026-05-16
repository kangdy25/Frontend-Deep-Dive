(() => {
  // 즉시실행 함수를 통해 변수에 접근할 수 있는 범위(스코프)를 제한합니다.
  let discount = 0.1;
  let price = 10000;

  // 할인율과 가격을 변경하는 함수를 만듭니다.
  // 이렇게 함으로써 discount와 price에 정해진 처리를 통해 값이 할당되는 걸 보장할 수 있습니다.
  const setDiscount = (value) => {
    discount = Number(value) / 100;
  };

  const setPrice = (value) => {
    price = Number(value);
  };

  $discountInput.addEventListener("change", (event) => {
    // 할인율 변경 이벤트
    setDiscount(event.target.value);
    const discounted = price * (1 - discount);

    const $result = document.querySelector("#result");

    $result.textContent = `${discounted}원`;
  });

  $priceInput.addEventListener("change", (event) => {
    // 가격 변경 이벤트
    setPrice(event.target.value);
    const discounted = price * (1 - discount);

    const $result = document.querySelector("#result");

    $result.textContent = `${discounted}원`;
  });
})();
