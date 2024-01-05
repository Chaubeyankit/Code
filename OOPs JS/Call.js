let person1 = {
   name: "Adam",
   age: 25,
}

let person2 = {
   name: "Stive",
   age: 21
}

let showDetails = function (city, car) {
   console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
}

// function borrowing

// showDetails.call(person1, "NOIDA", "BMW");
// showDetails.call(person2, "Delhi", "Audi");

// Apply me external arguments array me dal ke pass krna hota hai
// showDetails.apply(person2, ["Delhi", "Audi"]);

/*
Bind kudh ek func return krta hai, mean 'bind' bolta hai ki humne is ka func bna ke rakh liya app jab cha he call kr sakte hai
*/

let bindFxn = showDetails.bind(person2, "Delhi", "Audi");
// console.log(bindFxn) //return fxn
bindFxn()