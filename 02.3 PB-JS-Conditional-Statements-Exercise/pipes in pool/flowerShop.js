function flowerShop(input){
    let magnoliaCount = Number(input[0]);
    let ziumbiuliCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let kaktusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalMagnolias = magnoliaCount * 3.25;
    let totalZiumbiuli = ziumbiuliCount * 4;
    let totalRoses = roseCount * 3.50;
    let totalKaktuses = kaktusCount * 8;
    let totalFLowers = totalKaktuses+totalMagnolias+totalRoses+totalZiumbiuli;
    let profit = totalFLowers*0.95;

    if ( profit>=giftPrice){
        let remainMoney = Math.floor(profit - giftPrice);
        console.log(`She is left with ${remainMoney} leva.`);
    }
    if ( profit < giftPrice){
        let moneyNeeded = Math.ceil(giftPrice - profit);
        console.log(`She will have to borrow ${moneyNeeded} leva.`);
    }
}
flowerShop([15,7,5,10,100]);