function solve(input) {
    let sum = 0;
    let musala = 0;
    let monbolan = 0;
    let kilimanajdaro = 0;
    let k2 = 0;
    let everest = 0;
 
    for (i = 1; i < input.length; i++) {
        let group = Number(input[i]);
        sum += group;
        if (group <= 5) {
            musala += group;
        } else if (group <= 12) {
            monbolan += group;
        } else if (group <= 25) {
            kilimanajdaro += group;
        } else if (group <= 40) {
            k2 += group;
        } else if (group >= 41) {
            everest += group
        }
    }
    console.log(((musala / sum) * 100).toFixed(2) + '%');
    console.log(((monbolan / sum) * 100).toFixed(2) + '%');
    console.log(((kilimanajdaro / sum) * 100).toFixed(2) + '%');
    console.log(((k2 / sum) * 100).toFixed(2) + '%');
    console.log(((everest / sum) * 100).toFixed(2) + '%');
}
 
solve([
    '10',
    '10',
    '5',
    '1',
    '100',
    '12',
    '26',
    '17',
    '37',
    '40',
    '78'
]);
