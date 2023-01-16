function numberInInterval(input){

    let number = Number(input[0]);
    let n = number;

    if (n>= -100 && n<=100 && n !== 0){
        console.log("Yes");
    }else {
        console.log('No');
    }
}
numberInInterval(["25"]);