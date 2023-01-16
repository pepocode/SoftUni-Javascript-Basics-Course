function sumSeconds(input){
    let player1 = Number(input[0]);
    let player2 = Number(input[1]);
    let player3 = Number(input[2]);
    let totalPlayerTime = player1 + bplayer2 + player3;
    let minutes = Math.floor(totalPlayerTime / 60);
    let seconds = totalPlayerTime % 60;
    if ( seconds < 10 ){
        console.log( `${minutes}:0${seconds}`);
    }
    else {
        console.log( `${minutes}:${seconds}`);
    }


}
sumSeconds(["35","45","44"])
