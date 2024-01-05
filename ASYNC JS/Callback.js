/*
   1. call stack
   2. Node API
   3. Event loop
*/

console.log("Hello");

setTimeout(function st1() {
   console.log('I am st1')
}, 2000)

setTimeout(function st2() {
   console.log('I am st2')
}, 1000)

function sayHello() {
   console.log("Say Hello to me 🧑‍💻")
}
sayHello();