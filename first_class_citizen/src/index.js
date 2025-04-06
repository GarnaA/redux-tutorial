//functions are treated like any other value (such as numbers, 
// strings, or objects). 
// Functions can be assigned to variables, passed as arguments, 
// returned from other functions, and stored in data structures. 


function sayHello() {
  return "Hello World";
}

//example 1: passing functions as arguments
function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);
  
//example 2: assigning functions to variables
let fn = sayHello;

//example 3: returning functions from other functions
function sayHello() {
  return function() {
    return "Hello World";
  }
}

let fn2 = sayHello();
let message = fn2();
