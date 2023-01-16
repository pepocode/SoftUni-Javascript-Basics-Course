function radians(input){
    
    let angle = Number(input[0]);
    let degrees = (angle * 180)/Math.PI;

    console.log(degrees);
}
radians(["3.1416"]);