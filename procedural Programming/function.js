/* Function Type*/

// function sayHello(params) {
//    console.log("Hi ", params);
// }

// sayHello();

/*function are first class Citizens
1. assignment -> fn expression
 variable can pass as a parameter
2. fxn can pass as a parameter
 variable can be return from a function
3. fxn can be return from a fxn*/

// let fnContainer = function () {
//    console.log("I am anonymous fxn");
// }
// fnContainer();

function sayHello(params) {
   console.log("Params val : ", params);
   params();
}
function smaller() {
   console.log("I am smaller fxn")
}
// sayHello(smaller)
// sayHello([1, 2, 3])

function outer(params) {
   console.log("i am outer returning inner");
   return function inner(params) {
      console.log("I am inner")
   }
}
let rVal = outer()
console.log("Return value : ", rVal)
rVal()