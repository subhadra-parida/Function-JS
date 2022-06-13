// However, any variables declared in a program at outside of a function 
// have global scope(defined outside the function block)

// Print it's output........
var greet = "Hello World!";
function greetWorld() {
  console.log(greet);
}
greetWorld(); 
console.log(greet);



// OUTPUT:-
// Hello World
// Hello World