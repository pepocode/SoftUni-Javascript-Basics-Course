function depositCalculator(input){

    let depositedSum = Number(input[0]);
    let depositMonths = Number(input[1]);
    let yearRate = Number(input[2]);

    let profitLihva = depositedSum * yearRate / 100;
    let profiLihvaPerMonth = profitLihva / 12;
    let sum = depositedSum + depositMonths * profiLihvaPerMonth;
    console.log(sum);

}
depositCalculator(["2350",
"6",
"7"]);

