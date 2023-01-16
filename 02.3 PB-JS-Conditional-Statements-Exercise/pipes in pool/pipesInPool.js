function pipesInPool(input){

    let poolVolume = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);
    let leaked = '';
    let P1Fill = P1*H;
    let P2Fill = P2*H;
    let totalFill = P1Fill + P2Fill;
    let P1FillPercent = ((P1Fill / totalFill)*100).toFixed(2);
    let P2FillPercent = ((P2Fill / totalFill)*100).toFixed(2);
    let percentPoolFilled = (((P1Fill + P2Fill) / poolVolume)*100).toFixed(2);

    if ( totalFill <= poolVolume ){

    
    console.log(`The pool is ${percentPoolFilled}% full. Pipe 1: ${P1FillPercent}%. Pipe 2: ${P2FillPercent}%.`);
    }
    else if (totalFill > poolVolume){
        leaked = totalFill - poolVolume;
        console.log(`For ${H} hours the pool overflows with ${leaked} liters.`);

    }

}
pipesInPool([100, 100, 100, 2.5]);
    