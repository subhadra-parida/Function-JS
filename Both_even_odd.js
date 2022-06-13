function even_odd(num1,num2){
   for (var i=0;i<num1.length;i++){
       if (num1[i]%2===0 && num2[i]%2===0){
           console.log("Dono even hai.")
       }
       else{
           console.log("Dono odd hai.")
       }
   }
}
even_odd( [2, 6, 18, 10, 3, 75,34] , [6, 19, 24, 12, 3,87, 87])


 