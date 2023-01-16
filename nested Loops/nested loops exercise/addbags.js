function addbags(input){


    let bagPriceOver20kg = Number(input[0]);
    let bagKg = Number(input[1]);
    let daysToTravel = Number(input[2]);
    let baggageCount = Number(input[3]);
    let baggagePrice = 0;

    if(bagKg < 10 && bagKg >0 ){
        baggagePrice = 0.20 * bagPriceOver20kg;
    }else if( bagKg>=10 && bagKg <=20){
        baggagePrice = 0.50 * bagPriceOver20kg;
    }else {
        baggagePrice = bagPriceOver20kg;
    }

    if ( daysToTravel>30){
        baggagePrice = baggagePrice + (baggagePrice * 0.10);
    }else if(daysToTravel > 7 && daysToTravel <=30){
        baggagePrice = baggagePrice + (baggagePrice * 0.15);
    }else {
        baggagePrice = baggagePrice + (baggagePrice * 0.40);
    }

    let totalBagPrice = baggagePrice * baggageCount;

    console.log(`The total price of bags is: ${totalBagPrice.toFixed(2)} lv.`)

}
addbags(["30",
"18",
"15",
"2",
]);