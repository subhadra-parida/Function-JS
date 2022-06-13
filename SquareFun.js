// function squares_of_numbers(limit){
//     var output={}
//     for(var i=1;i<=limit;i++){
//         output[i]=i*i
//     }
//     console.log(output);
//  }
//  squares_of_numbers(30)


function squares_of_numbers(a){
    i=0;
    while (i<=a){
        s=i*i;
        console.log(i ,":",s);
        i++;
    }
}
squares_of_numbers(20);
