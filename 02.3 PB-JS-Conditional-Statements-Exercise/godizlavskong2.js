function godzilaVsKOng(input){
     

    let movieBudget = Number(input[0]);
    let statisti = Number(input[1]);
    let pricePerCloth = Number(input[2]);

    let decorPrice = movieBudget * 0.10;
    let totalClothprice = statisti * pricePerCloth;
    
    if ( statisti>150 ){
        let discount = totalClothprice * 0.10;
        totalClothprice = totalClothprice - discount;  
    }
    if (decorPrice + totalClothprice > movieBudget){
        let insufficientMoney = (decorPrice + totalClothprice) - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${insufficientMoney.toFixed(2)} leva more.`)
    }
    else { 
        let restMoney = movieBudget - (decorPrice + totalClothprice);
        console.log("Action!"); 
        console.log(`Wingard starts filming with ${restMoney.toFixed(2)} leva left.`);
    }
    

}
godzilaVsKOng(["20000",
"120",
"55.5"])
;
