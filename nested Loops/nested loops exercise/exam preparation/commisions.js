function commisions(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let commision = 0;

  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        commision = 0.05 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 500 && sales <= 1000) {
        commision = 0.07 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 1000 && sales <= 10000) {
        commision = 0.08 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 10000) {
        commision = 0.12 * sales;
        console.log(commision.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Varna":
      if (sales >= 0 && sales <= 500) {
        commision = 0.045 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 500 && sales <= 1000) {
        commision = 0.075 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 1000 && sales <= 10000) {
        commision = 0.1 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 10000) {
        commision = 0.13 * sales;
        console.log(commision.toFixed(2));
      } else {
        console.log("error");
      }
      break;

    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        commision = 0.055 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 500 && sales <= 1000) {
        commision = 0.08 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 1000 && sales <= 10000) {
        commision = 0.12 * sales;
        console.log(commision.toFixed(2));
        
      } else if (sales > 10000) {
        commision = 0.145 * sales;
        console.log(commision.toFixed(2));
      } else {
        console.log("error");
      }
      break;
      default:
          if(city !== "Sofia" || city !== "Varna" || city !== "Plovdiv"){
        console.log("error");
  }
  
  }
}

commisions(["Sofia", "444.4"]);
