function easterTrip(input){

    let country = input[0];
    let period = input[1];
    let nights = Number(input[2]);
    let sum = 0;

    if(country === "Germany"){
        if(period==="24-27"){
            sum = nights * 37
    }
    console.log(`Easter trip to ${country} : ${sum} leva.`);
    }
}
easterTrip(["Germany",
    "24-27",
    "5"]);