function harvest(input){
        let X = Number(input[0]);
        let Y = Number(input[1]);
        let Z = Number(input[2]);
        let workerCount = Number(input[3]);

        let totalGrape = X * Y;
        let wine = (totalGrape * 0.4) / 2.5;
        let wineNeeded = '';
        let wineRemain = '';

        if ( wine < Z ){
            wineNeeded =Math.floor(Z-wine);
            console.log(`It will be a tough winter! More ${wineNeeded} liters wine needed.`);
        }else if ( wine>=Z){
            wine = Math.floor(wine);
            wineRemain = Math.ceil(wine - Z);
            winePerPerson = Math.ceil(wineRemain / workerCount)
            console.log(`Good harvest this year! Total wine: ${wine} liters.`);
            console.log(`${wineRemain} liters left -> ${winePerPerson} liters per person.`);
        }

}
harvest([1020,1.5,425,4]);