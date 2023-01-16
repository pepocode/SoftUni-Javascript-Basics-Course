function foodDelivery(input){
    let chickenCount = Number(input[0]);
    let fishCount = Number(input[1]);
    let vegCount = Number(input[2]);

    let totalMenuPrice = (chickenCount * 10.35) + ( fishCount * 12.40 ) + (vegCount * 8.15);
    let desert = totalMenuPrice * 0.20
    let TotalSumWithDesert = totalMenuPrice + desert + 2.50;
    console.log(TotalSumWithDesert)
}
foodDelivery(["9 ","2 ","6 "])