function shopping(input){

    let budget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let totalVideocardPrice = videocardCount * 250;
    let totalSingularProcessorPrice = totalVideocardPrice * 0.35;
    let totalProcessorPrice = processorCount * totalSingularProcessorPrice;
    let totalSingularRamPrice = totalVideocardPrice * 0.10;
    let totalRamPrice = totalSingularRamPrice * ramCount;

    let totalPrice = totalVideocardPrice + totalProcessorPrice + totalRamPrice;
    if ( videocardCount > processorCount){
        totalPrice = 0.85 * totalPrice;
    }
    if ( budget >= totalPrice){
        let someLeft = budget - totalPrice;
    console.log(`You have ${someLeft.toFixed(2)} leva left!`)
} else {
    let needMoney = totalPrice - budget;
    console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva more!`)
}
}
shopping(["920.45",
"3",
"1",
"1"])
;
