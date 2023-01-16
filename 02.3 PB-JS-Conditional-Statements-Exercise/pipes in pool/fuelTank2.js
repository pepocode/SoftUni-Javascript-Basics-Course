function fuelTank2(input){
    let fuelType = input[0];
    let fuelQuantity = (input[1]);
    let clubCard = input[2];
    let priceGasoline = 2.22;
    let priceDiesel = 2.33;
    let priceGas = 0.93;
    let totalGasolinePrice = priceGasoline * fuelQuantity;
    let totalPriceDiesel = priceDiesel * fuelQuantity;
    let totalPriceGas = priceGas * fuelQuantity;
    let discountGasoline = 0;
    let discountDiesel = 0;
    let discountGas = 0;

    if (clubCard==="Yes" && fuelQuantity>=20 && fuelQuantity<=25){
        discountGasoline = (0.18 * fuelQuantity) + (0.08 *(totalGasolinePrice-(0.18 * fuelQuantity)));
        discountGas = (0.08 * fuelQuantity)+ (0.08 * (totalPriceGas-(0.08 * fuelQuantity)));
        discountDiesel = (0.12 * fuelQuantity) + (0.08 * (totalPriceDiesel-(0.12 * fuelQuantity)));
    }else if (clubCard==="Yes" && fuelQuantity>25){
        discountGasoline = (0.18 * fuelQuantity) + (0.10 *(totalGasolinePrice-(0.18 * fuelQuantity)));
        discountGas = (0.08 * fuelQuantity)+ (0.10 * (totalPriceGas-(0.08 * fuelQuantity)));
        discountDiesel = (0.12 * fuelQuantity) + (0.10 * (totalPriceDiesel-(0.12 * fuelQuantity)));
    }else if (clubCard==="Yes" && fuelQuantity<20){
        discountGasoline = (0.18 * fuelQuantity) ;
        discountGas = (0.08 * fuelQuantity);
        discountDiesel = (0.12 * fuelQuantity);
    }else if (clubCard==="No" && fuelQuantity>=20 && fuelQuantity<=25){
        discountGasoline = 0.08 *totalGasolinePrice;
        discountGas = 0.08 * totalPriceGas;
        discountDiesel = 0.08 * totalPriceDiesel;
    }else if (clubCard==="No" && fuelQuantity<20){
        discountDiesel = 0;
        discountGas=0;
        discountGasoline=0;
    }else if (clubCard==="No" && fuelQuantity>25){
    discountGasoline = 0.10 *totalGasolinePrice;
        discountGas = 0.10 * totalPriceGas;
        discountDiesel =0.10 * totalPriceDiesel;
}
    if (fuelType==="Gas"){
        finalPriceGas = totalPriceGas - discountGas;
        console.log(`${finalPriceGas.toFixed(2)} lv.`);
    }else if (fuelType==="Gasoline"){
        finalGasoline = totalGasolinePrice - discountGasoline;
        console.log(`${finalGasoline.toFixed(2)} lv.`);
    }else if (fuelType==="Diesel"){
        finalDiesel = totalPriceDiesel - discountDiesel;
        console.log(`${finalDiesel.toFixed(2)} lv.`);
    }
}
fuelTank2(["Gasoline",25,"No"]);