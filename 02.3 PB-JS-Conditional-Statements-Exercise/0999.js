function timePlus(input){
    let hour=Number(input[0]);
    let min=Number(input[1]);
    let newTotMinutes=hour*60+min+15;
    hour=Math.floor(newTotMinutes/60);
    min=newTotMinutes%60;
    if (hour>=24)
    hour=hour-24;
    if(min<10)
    console.log(`${hour}:0${min}`);
    else    console.log(`${hour}:${min}`);
 
}
timePlus(["1","46"]);