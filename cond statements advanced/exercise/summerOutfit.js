function summerOutfit(input){
    let degrees = Number(input[0]);
    let dayTime = input[1];
    let Outfit = 0;
    let Shoes = 0;

    if ( degrees >= 10 && degrees <=18 ){
    }   if ( dayTime === "Morning" ) {
        Outfit = "Sweatshirt";
        Shoes = "Sneakers";
    } else if ( dayTime === "Afternoon"){
        Outfit = "Shirt";
        Shoes = "Moccasins";
    } else if ( dayTime === "Evening"){
        Outfit = "Shirt";
        Shoes = "Moccasins";
    }
    if (degrees > 18 && degrees <= 24 ){
    }  if ( dayTime === "Morning" ) {
        Outfit = "Shirt";
        Shoes = "Moccasins";
    } else if ( dayTime === "Afternoon"){
        Outfit = "T-Shirt";
        Shoes = "Sandals";
    } else if ( dayTime === "Evening"){
        Outfit = "Shirt";
        Shoes = "Moccasins";
    }
    if ( degrees >= 25 ){
       if ( dayTime === "Morning" ) {
        Outfit = "T-Shirt";
        Shoes = "Sandals";

    } else if ( dayTime === "Afternoon"){
        Outfit = "Swim Suit";
        Shoes = "Barefoot";

    } else if ( dayTime === "Evening"){
        Outfit = "Shirt";
        Shoes = "Moccasins";

    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}
}
summerOutfit(["16","Morning"]);
