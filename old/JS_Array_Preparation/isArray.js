/*
Array.isArray() is a static property of the JavaScript Array object
only used as Array.isArray().
Using x.isArray(), where x is an array will return undefined.
*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));

let text = "W3Schools";
console.log(Array.isArray(text));