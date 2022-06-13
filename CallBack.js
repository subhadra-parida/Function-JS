function fun1(){
    return "Hello";
}
function fun2(call){
    console.log(call());
    console.log("Barsha")
}
fun2(fun1)