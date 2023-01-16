function multiplyTable(input) {
  let a = Number(input[0]);
  let b;

  for (let i = 1; i <= 10; i++) {
    b = a * i;

    console.log(`${i} * ${a} = ${b}`);
  }
}

multiplyTable(["5"]);
