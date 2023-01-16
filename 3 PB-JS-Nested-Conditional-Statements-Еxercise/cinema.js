function cinema(input){

    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalTickets = rows * columns;
    let ticketPrice = 0;
   
    if (movieType === 'Premiere'){
        ticketPrice = 12;
    } else if ( movieType === 'Normal'){
        ticketPrice = 7.50;
    } else if ( movieType === 'Discount'){
        ticketPrice = 5;
    } 
    let totalProfit = totalTickets * ticketPrice;
    console.log(`${totalProfit.toFixed(2)} leva`)

    


}
cinema(["Discount",
"12",
"30"])

