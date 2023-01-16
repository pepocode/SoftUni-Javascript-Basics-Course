function combination(input){

    let n = Number(input[0]);
    let combCount = 0;

for( let x=0; x<=n;x++){
    for(let y = 0;y<=n;y++){
        for(let z=0;z<=n;z++){
            if(x + y + z ===n){
                combCount++;
            }
        }
    }
}
console.log(combCount);
}
combination(["25"]);