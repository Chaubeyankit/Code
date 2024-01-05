function add() {
   let a = 5;
   function addChild() {
      console.log(a + 4)
   }
   return addChild
}

let cathcAdd = add();
// cathcAdd()

function outerFunction() {
   var counter = 0;

   function innerFunction() {
      return counter++;
   }

   return innerFunction;
}

var myFunction = outerFunction();

console.log(myFunction()); // 1
console.log(myFunction()); // 2