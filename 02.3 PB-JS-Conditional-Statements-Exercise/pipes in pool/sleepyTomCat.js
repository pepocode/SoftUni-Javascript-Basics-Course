function sleepyTomCat(input){
    let restDays = Number(input[0]);
    let workDayPlay = 63;
    let restDayPlay = 127;
    let workDayPlayTimeTotal = (365 - restDays) * 63;
    let restDayPlayTimeTotal = restDays * 127;
    let leftTime = '';

    let totalPlayTime = workDayPlayTimeTotal + restDayPlayTimeTotal;
    if ( totalPlayTime > 30000){    
        leftTime = totalPlayTime - 30000;    
        let H  = Math.floor(leftTime / 60);
        let M = leftTime%60;
        console.log(`Tom will run away`);
        console.log(`${H} hours and ${M} minutes more for play`)
    }else {
        leftTime =  30000 - totalPlayTime;
        let H  = Math.floor(leftTime / 60);
        let M = leftTime%60;
        console.log(`Tom sleeps well`);
        console.log(`${H} hours and ${M} minutes less for play`)
    }



}
sleepyTomCat([113]);