const person1 = {
   name: "Adam",
   age: 25,
}
//Here mutate the object, but its not accepted in functional programming

// const person2 = person1
// person2.name = "Steve";
// console.log(person1)
// console.log(person2)

/*Method to prevent

1. Object.assign({}, person1)
2. spread operator (...ref)

*/

// const person2 = Object.assign({}, person1)
const person2 = { ...person1 }
person2.name = "Steve";
console.log(person1)
console.log(person2)