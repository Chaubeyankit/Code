Array.prototype.myFunction = function () {
   console.log(this);
}

let arr = [1, 2, 3, 4, 5];
arr.myFunction()