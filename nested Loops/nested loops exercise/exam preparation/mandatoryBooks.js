function mandatoryBooks(input){

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let bookReadDays = Number(input[2]);

    let dayHours = bookPages / pagesPerHour;
    let hoursPerDay = dayHours / bookReadDays;
    console.log(hoursPerDay);

}
mandatoryBooks(["432 ",
"15 ",
"4 "]);
