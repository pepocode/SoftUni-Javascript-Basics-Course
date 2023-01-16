function fuelTank(input){

   let fuelType = input[0];
   let tankFilled = Number(input[1]);
   
   if ( tankFilled >= 25 && (fuelType ==="Diesel" || fuelType==="Gasoline" || fuelType === "Gas") ){
    console.log(`You have enough ${fuelType.toLowerCase()}.`);
   }
     else if (tankFilled < 25 && (fuelType ==="Diesel" || fuelType==="Gasoline" || fuelType === "Gas")){
    console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
   } else if ( fuelType !=="Diesel" || fuelType!=="Gasoline" || fuelType !== "Gas") 
   console.log(`Invalid fuel!`);

}
fuelTank(["Kerosene", 200]);