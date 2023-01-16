function sumOfNumbers(input) {
    let number = Number(input[0]);
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    console.log(`The sum of the digits is: ${sum}`);
}