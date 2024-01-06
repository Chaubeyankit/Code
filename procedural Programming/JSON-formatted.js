/*
JSON.stringify(): This method takes a JavaScript object and then transforms it into a JSON string.
JSON.parse(): This method takes a JSON string and then transforms it into a JavaScript object.
 
be careful with this method, as it will not work for many data types, including undefined, date objects, RegEx objects and infinity:

*/

const myObject = {
   dog: "🐕",
   cat: "🐈",
   koala: "🐨",
   count: 3
};

console.log(JSON.stringify(myObject));
// result: {"dog":"🐕","cat":"🐈","koala":"🐨","count":3}

console.log(JSON.parse(JSON.stringify(myObject)));
// result: Object {dog: "🐕", cat: "🐈", koala: "🐨", count: 3}