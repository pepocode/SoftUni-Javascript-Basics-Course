function darts(input){

        let name = input[0];
        let index = 1;
        let field = input[index];
        index++;
        let score = number(input[index]);
        
        let success = 0;
        let unsuccess = 0;
        let startingPoints = 301;
        index++;

        while(field !== "Retire"){
            switch (field) {
                case "Single":

               break;
                case "Double":
        
               break;
                case "Triple":
                    score = score * 3;
                    if(startingPoints >= startingPoints - score){
                        
                    }
               break;
             default:
              break;
}

        }




}
darts([
  'Michael van Gerwen', 'Triple',
  '20',                 'Triple',
  '19',                 'Double',
  '10',                 'Single',
  '3',                  'Single',
  '1',                  'Triple',
  '20',                 'Triple',
  '20',                 'Double',
  '20',                 ''
]
);
  