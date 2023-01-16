function cinemaDay(input){

    let timeForPicture = Number(input[0]);
    let countScene = Number(input[1]);
    let timePerScene = Number(input[2]);

    let preparation = timeForPicture * 0.15;
    let timeForTakingScene = countScene * timePerScene;
    let totalTime = preparation + timeForTakingScene;

    if(totalTime > timeForPicture){
        let leftTime = totalTime - timeForPicture;
        console.log(`You managed to finish the movie on time! You have ${Math.round(leftTime)} minutes left!`);
        
    }else{
        let neededTime = Math.abs(totalTime - timeForPicture);
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime)} minutes.`);
    }


}
cinemaDay(["60", "15", "3"]);