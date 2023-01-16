function solve(input) {
    let days = Number(input[0]) - 1;
    let room = input[1];
    let review = input[2];
    let discount = 0;
    let rate = 0;
    if (room === "apartment") {
        rate = 25.00;
        if (10 > days) discount = 0.30;
        else if (10 <= days && days <= 15) discount = 0.35;
        else if (15 < days) discount = 0.50;
    } else if (room === "president apartment") {
        rate = 35.00;
        if (10 > days) discount = 0.10;
        else if (10 <= days && days <= 15) discount = 0.15;
        else if (15 < days) discount = 0.20;
    } else if (room === "room for one person") {
        rate = 18.00;
    }
    let total = rate * days * (1-discount);
    if (review === "positive") total *= 1.25;
    else if (review === "negative") total *= 0.90;
    console.log(total.toFixed(2))
}
solve(["30",
"president apartment",
"negative"]);