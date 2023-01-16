function basketball(input){
    let price = Number(input[0]);
    let priceShoes = price - (0.40 * price);
    let equipment = priceShoes - ( 0.20 * priceShoes);
    let basketBall = equipment / 4;
    let accessories = basketBall / 5;

    let sum = price + priceShoes + equipment + basketBall + accessories;

    console.log(sum);
}
basketball(["550 "])