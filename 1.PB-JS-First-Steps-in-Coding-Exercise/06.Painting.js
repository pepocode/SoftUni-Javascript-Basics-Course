function painting(input) {
    let amountNylon = Number(input[0]);
    let amountPaint = Number(input[1]);
    let amountThinner = Number(input[2]);
    let hoursWork = Number(input[3]);
    let percentPaint = amountPaint*0.1;
    let sumNylon = (amountNylon+2)*1.50;
    let sumPaint = (amountPaint+percentPaint)*14.50;
    let sumThinner = amountThinner*5;
    let sumBag = Number(0.40);
    let sumAllMatterials = sumNylon + sumPaint + sumThinner + sumBag;
    let hoursWork2 = (sumAllMatterials*0.30)*hoursWork;
    let sumallpayments = sumAllMatterials + hoursWork2;
    console.log(sumallpayments);
     
    }
     
    painting(["10","11","4","8"])