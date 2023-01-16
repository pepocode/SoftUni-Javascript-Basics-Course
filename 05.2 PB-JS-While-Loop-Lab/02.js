function password(input){
    let index = 0;
    let username = input[index];
    index++;
    let realPassword = input[index];
    index++;
    let enteredPassword = input[index];
    index++;

    while(realPassword !== enteredPassword){
        enteredPassword = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);

}
password(["Gosho",
"secret",
"secret"]);

