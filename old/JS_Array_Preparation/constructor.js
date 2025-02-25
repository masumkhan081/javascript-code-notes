/*
constructor property returns the function that created the Array prototype.

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;
console.log(text)
console.log(text[0])
console.log(text())
console.log(text.Function)
console.log(text()[0])