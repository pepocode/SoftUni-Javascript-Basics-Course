function chetniStepeni(input){

    let n = Number(input[0]);
    // for (let i = 0; i <= n; i++){
        
    //     if ( i % 2 === 0){
    //         let number = Math.pow(2,i);
    //         console.log(number)
    //     }
    // }


    // for(let i = 0;i <= n ; i=i+2){
    //     console.log(Math.pow(2,i));
    // }

    
  let num = 1;
  for (let i = 0; i <= n; i += 2) {
    console.log(num);
    num = num * 2 * 2;
  }
}


chetniStepeni(["10"]);