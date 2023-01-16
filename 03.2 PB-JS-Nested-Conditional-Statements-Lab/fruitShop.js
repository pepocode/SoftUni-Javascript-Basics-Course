function fruitShop(input){

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

        
    switch (fruit){
        case "banana":
            switch (day){
                case "Monday":
                    console.log((quantity * 2.50).toFixed(2));break;
                case "Tuesday":
                    console.log((quantity * 2.50).toFixed(2));break;
                case "Wednesday":
                    console.log((quantity * 2.50).toFixed(2));break;
                case "Thursday":
                    console.log((quantity * 2.50).toFixed(2));break;
                case "Friday":
                    console.log((quantity * 2.50).toFixed(2));break;
                case "Saturday":
                    console.log((quantity * 2.70).toFixed(2));break;
                case "Sunday":
                    console.log((quantity * 2.70).toFixed(2));break;
            }
            break;
        case "apple":
            switch (day){
                case "Monday":
                    console.log((quantity * 1.20).toFixed(2));break;
                case "Tuesday":
                    console.log((quantity * 1.20).toFixed(2));break;
                case "Wednesday":
                    console.log((quantity * 1.20).toFixed(2));break;
                case "Thursday":
                    console.log((quantity * 1.20).toFixed(2));break;
                case "Friday":
                    console.log((quantity * 1.20).toFixed(2));break;
                case "Saturday":
                    console.log((quantity * 1.25).toFixed(2));break;
                case "Sunday":
                    console.log((quantity * 1.25).toFixed(2));break;
            }
            break;
        case "orange":
            switch (day){
                case "Monday":
                    console.log((quantity * 0.85).toFixed(2));break;
                case "Tuesday":
                    console.log((quantity * 0.85).toFixed(2));break;
                case "Wednesday":
                    console.log((quantity * 0.85).toFixed(2));break;
                case "Thursday":
                    console.log((quantity * 0.85).toFixed(2));break;
                case "Friday":
                    console.log((quantity * 0.85).toFixed(2));break;
                case "Saturday":
                    console.log((quantity * 0.90).toFixed(2));break;
                case "Sunday":
                    console.log((quantity * 0.90).toFixed(2));break;
                }
                break;
        case "grapefruit":
            switch (day){
                case "Monday":
                    console.log((quantity * 1.45).toFixed(2));break;
                case "Tuesday":
                    console.log((quantity * 1.45).toFixed(2));break;
                case "Wednesday":
                    console.log((quantity * 1.45).toFixed(2));break;
                case "Thursday":
                    console.log((quantity * 1.45).toFixed(2));break;
                case "Friday":
                    console.log((quantity * 1.45).toFixed(2));break;
                case "Saturday":
                    console.log((quantity * 1.60).toFixed(2));break;
                case "Sunday":
                    console.log((quantity * 1.60).toFixed(2));break;
                    }
                    break; 
        case "kiwi":
            switch (day){
                case "Monday":
                    console.log((quantity * 2.70).toFixed(2));break;
                case "Tuesday":
                    console.log((quantity * 2.70).toFixed(2));break;
                case "Wednesday":
                    console.log((quantity * 2.70).toFixed(2));break;
                case "Thursday":
                    console.log((quantity * 2.70).toFixed(2));break;
                case "Friday":
                    console.log((quantity * 2.70).toFixed(2));break;
                case "Saturday":
                    console.log((quantity * 3.00).toFixed(2));break;
                case "Sunday":
                    console.log((quantity * 3.00).toFixed(2));break;
                    }
                    break;     
        case "pineapple":
            switch (day){
                case "Monday":
                    console.log((quantity * 5.50).toFixed(2));break;
                case "Tuesday":
                    console.log((quantity * 5.50).toFixed(2));break;
                case "Wednesday":
                    console.log((quantity * 5.50).toFixed(2));break;
                case "Thursday":
                    console.log((quantity * 5.50).toFixed(2));break;
                case "Friday":
                    console.log((quantity * 5.50).toFixed(2));break;
                case "Saturday":
                    console.log((quantity * 5.60).toFixed(2));break;
                case "Sunday":
                    console.log((quantity * 5.60).toFixed(2));break;
                    }
                    break; 
                 case "grapes":
            switch (day){
                case "Monday":
                    console.log((quantity * 3.85).toFixed(2));break;
                case "Tuesday":
                    console.log((quantity * 3.85).toFixed(2));break;
                case "Wednesday":
                    console.log((quantity * 3.85).toFixed(2));break;
                case "Thursday":
                    console.log((quantity * 3.85).toFixed(2));break;
                case "Friday":
                    console.log((quantity * 3.85).toFixed(2));break;
                case "Saturday":
                    console.log((quantity * 4.20).toFixed(2));break;
                case "Sunday":
                    console.log((quantity * 4.20).toFixed(2));break;
                    }
                    break; 
                                
            default : 
                    console.log("error"); 
                    break;
                                                                                                            
    }
    
}
fruitShop(["apple","Workday","2"]);
