/*

   .                           non-strict                 strict
   Browsers
   
   1. console.log(this)        window object             window object
   2. function - log           window Object             undefined
   3. object-func              object itself             object itself
   4. object-func-func         window object             undefined

   Node.js

   1. console.log(this)        {}                         {}
   2. function - log           global Object              undefined
   3. object-func              object itself              object itself
   4. object-func-func         global Object              undefined

*/

// this keyword with node.js in non strict mode

// console.log(this); // Ans - Empty object

// function showThis() {
//    console.log(this);
// }
// showThis(); // Ans - global Object

// let obj = {
//    name: "this",
//    f: function () {
//       console.log(this);
//    }
// }
// obj.f() // Ans - return Object itself

const person = {
   name: "Iron Man", 
   getName: function () {
      console.log(this.name);
   }
};

person.getThis(); // Iron Man