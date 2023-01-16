function smallShop(input){
    let product = input[0];
    let city = input[1];
    let qunatity = Number(input[2]);

    if ( product === "coffee" ){
        if ( city === "Sofia" ){
        product = 0.50;
        }
    if ( product === "coffee" ){
        if ( city === "Plovdiv" ){
        product = 0.40;
        }
    if ( product === "coffee" ){
       if ( city === "Varna" ){
        product = 0.45;
        }
        }
    }
}

if ( product === "beer" ){
    if ( city === "Sofia" ){
    product = 1.20;
    }
if ( product === "beer" ){
    if ( city === "Plovdiv" ){
    product = 1.15;
    }
if ( product === "beer" ){
   if ( city === "Varna" ){
    product = 1.10;
    }
    }
}
}
if ( product === "sweets" ){
    if ( city === "Sofia" ){
    product = 1.20;
    }
if ( product === "sweets" ){
    if ( city === "Plovdiv" ){
    product = 1.15;
    }
if ( product === "sweets" ){
   if ( city === "Varna" ){
    product = 1.10;
    }
    }
}
}
if ( product === "peanuts" ){
    if ( city === "Sofia" ){
    product = 1.60;
    }
if ( product === "peanuts" ){
    if ( city === "Plovdiv" ){
    product = 1.50;
    }
if ( product === "peanuts" ){
   if ( city === "Varna" ){
    product = 1.55;
    }
    }
}
}
if ( product === "water" ){
    if ( city === "Sofia" ){
    product = 0.80;
    }
if ( product === "water" ){
    if ( city === "Plovdiv" ){
    product = 0.70;
    }
if ( product === "water" ){
   if ( city === "Varna" ){
    product = 0.70;
    }
    }
}
}
console.log(product * qunatity);



}
smallShop(["water","Plovdiv","2"])


