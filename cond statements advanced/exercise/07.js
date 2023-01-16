function hotelRoom(input){
    let month = input[0];
    let countNight = input[1];
    let studio;
    let apartment;

    switch(month){
        case 'May':
        case 'October':
            studio = 50;
            apartment = 65;
                if(countNight>14){
                    studio = studio * 0.70;
                    apartment = apartment * 0.90;
                }else if ( countNight>7){
                    studio = studio * 0.95
                }break;
        case 'June':
        case 'September':
            studio = 75.20;
            apartment = 68.70;
                if(countNight>14){
                    studio = studio * 0.80;
                    apartment = apartment * 0.9;
                }else {
                    studio = 75.20;
                }break;
        case 'July':
        case 'August':
            studio = 76;
            apartment = 77;
                if (countNight>14){
                    apartment = apartment * 0.9;
                }else {
                    apartment = 77;
                }break;
                    
    }

    total1 = apartment*countNight
    total2 = studio*countNight

    console.log(`Apartment: ${total1.toFixed(2)} lv.`);
    console.log(`Studio: ${total2.toFixed(2)} lv.`)

}
hotelRoom(["August",
"20"])

;
