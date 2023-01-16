function bestPlayer(input){

    let index = 0;
    let playerName = input[index];
    index++;
    let playerScore = input[index];
    index++;
    let neymarGoalCount = 0;
    let ronaldoGoalCount = 0;
    let messiGoalCount = 0;
    
    while(playerName !== "END"){
        playerName = input[index];
        playerScore = Number(input[index]);
        index++;
        if(input[index] === 10){
            break;
        }
       if(input[index] === 3){
        input[index-1] = hatTrickPlayer;
       }
    }



}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);