function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let typeVacation = '';
    switch (season){
        case 'summer':
            if (budget <= 100){
                typeVacation = 'Camp';
                budget = budget * 0.3;
            }else if (budget <=1000){
                typeVacation = 'Camp';
                budget = budget * 0.4;
            }else if (budget > 1000){
                typeVacation = 'Hotel';
                budget = budget * 0.9;
            }
            break;
        case 'winter':
            if (budget <= 100){
                typeVacation = 'Hotel';
                budget = budget * 0.7;
            }else if (budget <=1000){
                typeVacation = 'Hotel';
                budget = budget * 0.8;
            }else if (budget > 1000){
                typeVacation = 'Hotel';
                budget = budget * 0.9;
            }
            break;
    }
    if (budget<=100){
        destination = 'Bulgaria';
    }else if (budget<=1000){
        destination = 'Balkans';
    }else if (budget>1000){
        typeVacation = 'Hotel';;
        destination = 'Europe'
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${typeVacation} - ${budget.toFixed(2)}`)

}
journey(["1500", "summer"]);