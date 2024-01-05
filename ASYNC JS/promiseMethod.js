let p1 = new Promise(function (resolve, reject) {
   reject('Promise 1 is rejected')
})
let p2 = new Promise(function (resolve, reject) {
   resolve('Promise 2 is resolved')
})
let p3 = new Promise(function (resolve, reject) {
   resolve('Promise 3 is resolved')
})
let p4 = new Promise(function (resolve, reject) {
   reject('Promise 4 is rejected')
})
/* 
   1. all --> its return promise also.
   2. if any of them promises are not resolve then , its return error ('catch wala') 
*/
// let allPromiseResolve = Promise.all([p1, p2, p3, p4]);
// console.log(allPromiseResolve)

// allPromiseResolve.then((promiseArr) => {
//    console.log(promiseArr)
// }).catch((error) => {
//    console.log(error)
// })

/*
   race --> if look for only first promise is resolved or reject it return ans;
*/

Promise.race([p1, p2, p3, p4])
   .then((val) => {
      console.log(val)
   }).catch((error) => {
      console.log(error)
   }) 