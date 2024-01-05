/*Question 1   */

// function real() {
//    console.log("I am real. Always run me");
// }

// function real() {
//    console.log("😟 No, I am real. Always run me");
// }

// function real() {
//    console.log("You both are wasted 😂😂");
// }

// real();

/*Question 2*/

// function real() {
//    console.log("I am real. Always run me");
// }

// function real() {
//    console.log("😟 No, I am real. Always run me");
// }
// real();
// function real() {
//    console.log("You both are wasted 😂😂");
// }

/*Q1 and Q2 discussion - Fxn wale code ke liye global Execution Contest me alag se Memory allocate ho jati hai "Heap", fir fxn kahi call kr lo last wala as a refrence pass ho gaa.

Ans - "You both are wasted 😂😂"*/

/*Question 3*/

// console.log("varName", varName); //undefined
// var varName;
// console.log("varName", varName); //undefined
// varName = "Iron Man";
// console.log("varName", varName); //Iron Man
// fn() //Hello from fn
// function fn() {
//    console.log("Hello from fn");
// }
// fn(); //Hello from fn
//fnContainer(); //TypeError: fnContainer is not a function at Object.<anonymous>
// var fnContainer = function () {
//    console.log("I am an Expression");
// }
// fnContainer();

/*Question No 4 */

var a = 10;
console.log("line no 54,", a); // 10

function q4() {
   console.log("line no 57,", a); //undefined
   var a = 20;
   a++; //internally stack me 21 hoga 
   console.log("line no 60,", a); // 21
   if (a) {
      var a = 30;
      a++;
      console.log("line no 64,", a); //31
   }
   //yaha hum 20 expect kr rhe the pr 31 print hua, kyo var function scope 
   console.log("line no 66,", a); //31
}
q4();
//but yaha pr var fxn ke bahar kudh ko update nahi kr paye to, var a = 10 print hoga
console.log("line no 69,", a); // 10