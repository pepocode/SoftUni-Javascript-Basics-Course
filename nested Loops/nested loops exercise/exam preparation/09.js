function yardGreening(input){

    let yardDimensions = Number(input[0]);
    let pricePerSqM = 7.61;
    let totalPrice = pricePerSqM * yardDimensions;
    let totalPaymentPrice = totalPrice - ( totalPrice * 0.18);
    
    console.log(`The final price is: ${totalPaymentPrice} lv.`);
    console.log(`The discount is: ${totalPrice * 0.18} lv.`);

}
yardGreening(["150"]);