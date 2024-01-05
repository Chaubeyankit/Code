// console.log(a);
// var a;
// console.log(a);
// a = 10;
// console.log(a);

// fn();
// function fn() {
//    console.log("I can be called before my declaration");
// }
// fn()

console.log("Line no 13, ", varName);
var varName = 10;
console.log("line no 15, ", varName);
function c() {
   console.log("line no 17, ", varName);
}
function a() {
   console.log("line no 21, ", varName);
   var varName = 20;
   /*Introduce Lexical Scope here i.e always look outside of the fxn defination, not  fxn call*/
   function b() {
      console.log("line no 24, ", varName);
   }
   b();
   /*Introduce Lexical Scope here i.e always look outside of the fxn defination, not  fxn call*/
   c();
   console.log("line no 28, ", varName);
   if (varName == 20) {
      var varName;
      /*yaha hum undefined expecte kr rhe the, pr 20 log hua, kyo ki "var" function scope hota hai , i.e ek bar hi function memory allocate hote time declere ho jata hai fir 
      pure fxn me call hota rhta hai */
      console.log("line no 32,", varName)
   }
}
a();