function suppliesForSchool(input){
    let packetChemicals = 5.80;
    let packetMarkers = 7.20;
    let chemicals = 1.20;

    let totalChemicals = packetChemicals * Number(input[0]);
    let totalMarkers = packetMarkers * input[1];
    let totalLitresChemicals = chemicals * input[2];
    let totalSum = totalChemicals + totalMarkers + totalLitresChemicals;
    let discount = totalSum * 0.25;
    let totalPricing = totalSum - discount;
    console.log(totalPricing);
}
suppliesForSchool(["2 ","3 ","4 ","25 "])