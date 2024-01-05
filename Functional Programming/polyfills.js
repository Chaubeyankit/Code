//map

let arr = [1, 2, 3, 4, 5]
let maparr = arr.map(function (x) {
   return x * x;
})

//Custome Map

function myPolifillsMap(arr, cb) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr.push(cb(arr[i]));
   }
   return newArr;
}

function square(x) {
   return x * x;
}

console.log(myPolifillsMap(arr, square))