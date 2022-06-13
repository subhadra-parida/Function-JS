function SumOfMultiple(limit){
    var sum=0;
    for (i=0; i<=limit;i++){
        if (i%3==0){
            sum=sum+i;
        }
        if (i%5==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}
SumOfMultiple(15);