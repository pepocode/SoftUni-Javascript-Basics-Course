function usdToBgn(input){

    let dollars = Number(input[0]);
    let rate = 1.79549;
    let bgn = dollars * rate;
    console.log(bgn);
}
usdToBgn(["12.5"]);