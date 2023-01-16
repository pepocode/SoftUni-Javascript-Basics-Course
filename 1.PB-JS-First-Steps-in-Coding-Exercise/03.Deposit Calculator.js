function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositMonths = Number(input[1]);
    let depositYear = Number(input[2]);
    let yearDecimal = depositYear / 100;
    let sum = depositSum + depositMonths *((depositSum * yearDecimal) / 12);
    
    console.log(sum);
}
depositCalculator(["200 ","3 ","5.7 "])