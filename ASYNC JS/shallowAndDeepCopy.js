// shallow copy

let sports = ["Cricket", "Football", "Swiming", {
   country: "India",
   game: "Tennis"
}]
/*Spread method ...  */

// let copySports = [...sports];
// copySports[2] = "Hockey";

// copySports[3]['game'] = "Hockey";

// console.log("Original array - > ", sports)
// console.log("Copy array - > ", copySports)

/*Array.from() */

// let copySports = Array.from(sports);
// copySports[2] = "Hockey";

// copySports[3]['game'] = "Hockey";

// console.log("Original array - > ", sports)
// console.log("Copy array - > ", copySports)

//Deep copy

let copySports = JSON.parse(JSON.stringify(sports));
copySports[2] = "Hockey";

copySports[3]['game'] = "Hockey";

console.log("Original array - > ", sports)
console.log("Copy array - > ", copySports)
