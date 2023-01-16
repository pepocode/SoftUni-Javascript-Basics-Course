function fishAquarium (input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height;
    let volumeLitres = volume * 0.001;
    let neededLitres = volumeLitres - ( 0.17 * volumeLitres);
    console.log(neededLitres);
}
fishAquarium(["85 ","75 ","47 ","17 "])