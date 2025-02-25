/* includes() method returns true if an array contains a 
specified value
*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));
console.log(fruits.includes("mango")); // case sensitive
//
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Banana", 3)); // search start at 3