function toyShop(input){

    let vacationPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let moneyEarned = (puzzles * 2.60) + (talkingDoll * 3) + (teddyBear * 4.10) + (minion * 8.20) + (truck * 2);
    let toysCount = puzzles + talkingDoll + teddyBear + minion + truck;
    if (toysCount >=50 ){
        moneyEarned = moneyEarned * 0.75;
    }
    let moneyAfterRent = moneyEarned * 0.90;
if ( moneyAfterRent >= vacationPrice){
    let moneyLeft = moneyAfterRent - vacationPrice
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
}else { 
    let insufficientMoney = vacationPrice - moneyAfterRent;
    console.log(`Not enough money! ${insufficientMoney.toFixed(2)} lv needed.`)
}


}
toyShop(["40.8","20","25","30","50","10"]);
