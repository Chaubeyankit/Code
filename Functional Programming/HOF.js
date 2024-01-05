//map

let arr = [1, 2, 3, 4, 5]
let newArr = arr.map(function (x) {
   return x * x;
})

console.log(newArr);

//filter

let filterArr = arr.filter(function (x) {
   return x % 2 != 0;
})
console.log(filterArr);

//reduce

let sum = arr.reduce(function (accumulator, x) {
   return accumulator + x;
}, 0)

console.log(sum) 