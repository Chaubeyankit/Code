/* Array and fxn is nothing about Object in js */

// let arr = [1, 2, 3, 4, 5];
// arr.name = "ankit"
// arr.display = function () {
//    console.log("ankit say's Hii..")
// }
// for (let key in arr) {
//    console.log(key, " : ", arr[key])
// }

function fn() {
   console.log("Hello from fn");
}

fn.prop = "Property of function";
fn.myFn = function fn() {
   console.log("I am method of function")
}

fn()
fn.myFn();
console.log(fn.prop)