//is square of the number is even

//Imperative Code --> How to go with problems
const a = 4;
const sqr = a * a;
let isEven;
if ((sqr) % 2 == 0) {
   isEven = true;
}
else {
   isEven = false;
}

console.log(isEven);

//Declarative Code --> What is problems

const isSquareEven = (x) => ((x * x) % 2 == 0 ? true : false);
console.log(isSquareEven(5))