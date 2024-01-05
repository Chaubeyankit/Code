/* Ques 1 */

//microTask Concept
// console.log("Program start") // 1

// setTimeout(() => {
//    console.log('I am set time out'); //4
// }, 1000)

// Promise.resolve().then((val) => {
//    console.log("Promise Output") //3
// })

// console.log('Program End') // 2

/* Ques 2 */

// async function inc(x) {
//    x = x + await 1
//    return x;
// }

// async function increment(x) {
//    x = x + 1;
//    return x;
// }

// inc(1).then(function (x) {
//    increment(x).then(function (x) {
//       console.log(x)
//    })
// })

/* */

// async function f1() {
//    console.log(1);
// }

// async function f1() {
//    console.log(2);
// }
// console.log(3);
// f1();
// console.log(4);
// f2();

// async function f2() {
//    console.log("GO");
// }

/* Ques 4 */

function resolveAfterSeconds(n, x) {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(x);
      }, n);
   });
}

(function () {
   let a = resolveAfterSeconds(1000, 1)
   a.then(async function (x) {
         let y = await resolveAfterSeconds(2000, 2);
         let z = await resolveAfterSeconds(1000, 3);
         let p = resolveAfterSeconds(2000, 4);
         let q = resolveAfterSeconds(1000, 5);
         console.log(x + y + z + await p + await q);
      })
})()