//Impure Function

let a = 9;
function addTwoNumber(b) {
   console.log(a + b);
}
// addTwoNumber(10)

//Pure Function
function addTwoNumber(a, b) {
   // console.log(a + b); //Side effect
   return a + b;
}
console.log(addTwoNumber(2, 3));