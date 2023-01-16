function transportPrice(input){

    let n = Number(input[0]);
    let dayOrNight = input[1];
    let taxiStartPrice = 0.70;
    let busPrice = 0.09;
    let trainPrice = 0.06;
    
    
    if (n>=100) {
        let totalTrainPrice = n * trainPrice;
        console.log(totalTrainPrice.toFixed(2));
    } else if (n>=20 && n <= 99 ){
        let totalBusPrice = n * busPrice;
        console.log(totalBusPrice.toFixed(2));;

    }
    if ( dayOrNight === 'day' && n<20){
        let totalTaxiDayPrice = taxiStartPrice + ( n * 0.79);
        console.log(totalTaxiDayPrice.toFixed(2)); 
        } else if (dayOrNight==='night' && n<20){
        let totalTaxiNightPrice = taxiStartPrice + (n * 0.90);
        console.log(totalTaxiNightPrice.toFixed(2)); }
    
    
}
transportPrice([180,"night"]);