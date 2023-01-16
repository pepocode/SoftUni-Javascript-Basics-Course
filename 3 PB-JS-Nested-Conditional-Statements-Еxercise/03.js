function newHome(input){
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let pricePerFlower = 0;

    switch(flowerType){
        case "Roses":
            pricePerFlower = 5;break;
        case "Dahlias":
            pricePerFlower = 3.80;break;
        case "Tulips":
            pricePerFlower = 2.80;break;
        case "Narcissus":
            pricePerFlower = 3;break;
        case "Gladiolus":
            pricePerFlower = 2.50;break;

    }
    let totalFlowerPrice = pricePerFlower * flowerCount;
    if ( flowerType === "Roses" && flowerCount > 80){
        totalFlowerPrice = totalFlowerPrice * 0.9;
    }else if ( flowerType === "Dahlias" && flowerCount > 90){
        totalFlowerPrice = totalFlowerPrice * 0.85;
    }else if (flowerType === "Tulips" && flowerCount > 80){
        totalFlowerPrice = totalFlowerPrice * 0.85;
    }else if ( flowerType === "Narcissus" && flowerCount > 120){
        totalFlowerPrice = totalFlowerPrice * 1.15;
    }else if ( flowerType ==="Gladiolus" && flowerCount < 80){
        totalFlowerPrice = totalFlowerPrice * 1.20;
    }
    if ( budget >= totalFlowerPrice){
        let sumRemain = budget - totalFlowerPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${sumRemain.toFixed(2)} leva left.`)
    }else if ( budget < totalFlowerPrice){
        let sumNeeded = totalFlowerPrice - budget;
        console.log(`Not enough money, you need ${sumNeeded.toFixed(2)} leva more.`)
    }
}
newHome(["Tulips","88","260"]);
