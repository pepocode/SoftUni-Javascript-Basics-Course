function onTime(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examHourInMinutes = examHour * 60;
    let arrivalHourInMinutes = arrivalHour * 60;
    let totalHourExamMinutes = examHourInMinutes + examMinute;
    let totalHourArrivaMinutes = arrivalHourInMinutes + arrivalMinute;
    let difference = totalHourExamMinutes-totalHourArrivaMinutes;

    if ( difference > 30){
        console.log(`Early`);
    }
    else if ( totalHourExamMinutes <= totalHourArrivaMinutes + 30 ){
        console.log(`On time`);
    }
    else if ( totalHourExamMinutes < totalHourArrivaMinutes){
        console.log(`Late`);
    }


}
onTime(["9","30","9","50"]);
