// let counter = 0;
// let intervalId;

// function sayHi(params) {
//    counter++;
//    console.log("Hi");
//    if (counter >= 3) {
//       clearInterval(intervalId)
//    }
// }

// intervalId = setInterval(sayHi, 2000)

/*
   set Interval ka polyFills
*/

function createSetIntervalPolyfill(params) {


   return {
      setIntervalPolyfill,
      clearIntervalPolyfill
   }
}

const {
   setIntervalPolyfill,
   clearIntervalPolyfill
} = createSetIntervalPolyfill