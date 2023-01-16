function time(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    
    let totalTime = hours * 60 + minutes + 15;
    let totalHours = Math.trunc(totalTime / 60);
    minutes = totalTime % 60;

    if ( totalHours >=24){
        hours = hours - 24;
    }
    if (minutes < 10){
        console.log( `${totalHours}:0${minutes}`);
    } else   {
     
    console.log(`${totalHours}:${minutes}`);
    }

}

    
    


time(["23", "59"])