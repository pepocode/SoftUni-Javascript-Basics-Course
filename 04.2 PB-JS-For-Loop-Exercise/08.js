function tennisRanklist(input) {
    let tournamentsNumber = Number(input[0]);
    let allPoints = Number(input[1]);
    let currentPoints = 0;
    let points = 0;
    let winnerCounter = 0;
    let stageInTournament = '';
 
    for (let i = 1; i <= tournamentsNumber+1; i++) { 
        stageInTournament = input[i]; 
        if (stageInTournament === 'W') {
            points = 2000;
            winnerCounter++;
        } else if (stageInTournament === 'F') {
            points = 1200;
        } else if (stageInTournament === 'SF') {
            points = 720;
        }
        allPoints += points;
        currentPoints += points;
        
    }
    let averagePoints = currentPoints / tournamentsNumber;
    let winnerPercent = (winnerCounter / tournamentsNumber) * 100;
    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winnerPercent.toFixed(2)}%`);
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
