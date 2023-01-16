function cinemaTickets(input) {

    let index = 0;
    let movieName = input[index];
    index++;
    let standardTicketsCount = 0;
    let studentsTicketsCount = 0;
    let kidTicketsCount = 0;
    

    while(movieName !== "Finish") {
        let freePlaces = Number(input[index]);
        index++;

        let currentTicket = input[index];
        index++;
        let spacesTaken = 0;

        while(currentTicket !== "End") {
            spacesTaken += 1;
            

            if(currentTicket === "standard"){
            standardTicketsCount++;
           } else if( currentTicket === "student"){
            studentsTicketsCount++;
           }else if (currentTicket === "kid"){
            kidTicketsCount++;
            }
            spacesTaken+=1;

           if(spacesTaken === freePlaces){
            break;
           }
            currentTicket = input[index];
            index++;
           }
        
        let percentFull = (spacesTaken / freePlaces) * 100;

        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);
        movieTitle = input[index];
        index++
    
        let totalTickets = studentsTicketsCount + standardTicketsCount + kidTicketsCount;

         console.log(`Total tickets: ${totalTickets}`);
    }
         let standardPercent = (standardTicketsCount / totalTickets)* 100;
         let studentPercent = ( studentsTicketsCount / totalTickets)* 100;
         let kidPercent = (kidTicketsCount / totalTickets)* 100;

    
        console.log(`${studentdPercent.toFixed(2)}% standard tickets.`);
        console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
        console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
              
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
