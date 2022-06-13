// USING WHILE LOOP HOW TO PRINT EVEN & ODD NUMBERS.
function showNumbers(limit){
    i=0
    while (i<=limit){
        if(i%2 ===0){
            console.log(i," - Even");
        }
        else{
            console.log(i," - Odd");
        }
        i++
    }
 }
showNumbers(3);
// &&&&&&&&&&&&&&&&&&&&&

// USING FOR LOOP HOW TO DEFINE EVEN & ODD NUMBERS.
function showNumbers(limit){
    for (i=0; i<=limit; i++){
        if (i%2==0){
            console.log(i,"Is Even.")
        }
        else{
            console.log(i,"Is Odd.")
        }
    }
}
showNumbers(13)