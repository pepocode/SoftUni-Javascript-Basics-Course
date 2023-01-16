function oscars(input){

    let rent = Number(input[0]);

    let statues = rent -  0.30 * rent;
    let catering = statues -  0.15 * statues;
    let sound = 0.5 * catering;
    let sum = statues + catering + sound + rent;
    console.log(sum.toFixed(2));

}
oscars(["5555"]);