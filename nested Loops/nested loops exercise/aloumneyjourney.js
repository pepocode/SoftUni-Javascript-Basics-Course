function aluminumJoinery(input) {
  let countJoinery = Number(input[0]);
  let kindJoinery = input[1];
  let delivery = input[2];
  let deliveryTax = 60;
  let joineryPrice = 0;
  let sum = 0;
  let orderTrue = true;

  if (countJoinery < 10) {
    orderTrue = false;
    console.log(`Invalid order`);
  }
  switch (kindJoinery) {
    case "90X130":
      joineryPrice = 110;
      if (countJoinery > 30 && countJoinery <= 60) {
        joineryPrice = joineryPrice * 0.95;
      } else if (countJoinery > 60) {
        joineryPrice = joineryPrice * 0.92;
      }
      break;
    case "100X150":
      joineryPrice = 140;
      if (countJoinery > 40 && countJoinery <= 80) {
        joineryPrice = joineryPrice * 0.94;
      } else if (countJoinery > 80) {
        joineryPrice = joineryPrice * 0.9;
      }
      break;
    case "130X180":
      joineryPrice = 190;
      if (countJoinery > 20 && countJoinery <= 50) {
        joineryPrice = joineryPrice * 0.93;
      } else if (countJoinery > 50) {
        joineryPrice = joineryPrice * 0.88;
      }
      break;
    case "200X300":
      joineryPrice = 250;
      if (countJoinery > 25 && countJoinery <= 50) {
        joineryPrice = joineryPrice * 0.91;
      } else if (countJoinery > 50) {
        joineryPrice = joineryPrice * 0.86;
      }
      break;
  }
  if (delivery === "With delivery") {
    sum = joineryPrice * countJoinery + deliveryTax;
    if (countJoinery > 99) {
      sum = sum * 0.96;
    }
  } else {
    sum = joineryPrice * countJoinery;
    if (countJoinery > 99) {
      sum = sum * 0.96;
    }
  }
  if (orderTrue === true) {
    console.log(`${sum.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["40", 
    "90X130",
    "Without delivery"
    ]);