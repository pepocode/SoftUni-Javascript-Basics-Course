function operationsBetweenNumbers(input){
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let result = 0;

   if (operator==='+'){
        result = N1 + N2;
    }
    else if (result % 2 === 0){
                    console.log(`${N1} ${operator} ${N2} = ${result} - even`);
                }
                else  {
                    console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
                }
                
            }


       



operationsBetweenNumbers(["10","12","+"]);
