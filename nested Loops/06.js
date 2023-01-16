function building(input){

    let floorEntered = Number(input[0]);
    let roomEnetered = Number(input[1]);
    let result = "";

    for(let floor = floorEntered; floor>=1; floor--){
        for( let room = 0;room<roomEnetered;room++){
            if(floor===floorEntered){
                if(room === roomEnetered - 1){
                    result = result + "L" + floor + room;
                }else {
                    result = result + "L" + floor + room + " ";
                }
            }else  if(floor % 2 ===0){
                if(room === roomEnetered - 1){
                    result = result + "O" + floor + room;
                }else {
                    result = result + "O" + floor + room + " ";
                }
            }
        else {
                    if(room === roomEnetered - 1){
                        result = result + "A" + floor + room;
                    }else {
                        result = result + "A" + floor + room + " ";
                    }
                }
        }
        console.log(result);
        result = "";
}
    }

building(["6", "4"]);