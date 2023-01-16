function pets(input){

    let days = Number(input[0]);
    let leftFood = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let tortoiseFoodPerDay = Number(input[4]);

    let totalDogFood = days * dogFoodPerDay;
    let totalCatFood = days * catFoodPerDay;
    let totalTortoiseFood = (days * tortoiseFoodPerDay)/1000;
    let totalFood = totalCatFood + totalDogFood + totalTortoiseFood;

    if (leftFood >= totalFood){
        let remainFood = Math.floor(leftFood - totalFood);
        console.log(`${remainFood} kilos of food left.`);
    }else if (leftFood < totalFood){
        foodNeeded = Math.ceil(totalFood - leftFood);
        console.log(`${foodNeeded} more kilos of food are needed.`);
    }



}
pets([5,10,2.1,0.8,321])