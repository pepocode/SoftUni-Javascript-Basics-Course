function avio(input){

    let companyName = input[0];
    let adultTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let nerPriceAdultTicket = Number(input[3]);
    let fee = Number(input[4]);

//     Да се отпечата на конзолата крайната печалбата от продажбите, в следния формат:
// •	"The profit of your agency from {име на авиокомпанията} tickets is {печалба за агенцията} lv."
// Цената на печалбата да бъде форматирана до втората цифра след десетичния знак.
    let childNetTicketPrice = nerPriceAdultTicket - (nerPriceAdultTicket * 0.70);
    let totalPriceAdultTicketWithFee = nerPriceAdultTicket + fee;
    let totalPriceChildTicketWithFee = childNetTicketPrice + fee;

    let totalTicketSum = (adultTickets * totalPriceAdultTicketWithFee) + (childTickets * totalPriceChildTicketWithFee);
    let totalProfit = 0.2 * totalTicketSum;
    console.log(`The profit of your agency from ${companyName} tickets is ${totalProfit.toFixed(2)} lv.`)



}
avio(["WizzAir",
"15",
"5",
"120",
"40"
]);