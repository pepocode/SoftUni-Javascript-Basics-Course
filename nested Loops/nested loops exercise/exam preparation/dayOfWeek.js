function dayOfWeek(input){

    let number = Number(input[0]);

    switch ( number){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        default:
            console.log("Error");
            break;
    }


}
dayOfWeek(["3"]);