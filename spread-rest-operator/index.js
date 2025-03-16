// ----------------------------  Spread Operator Examples

// spread operator: Combining Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log("after applying spread: " + combinedArr)


// 1. Rest Operator: Destructuring for Remaining Elements
const [first, second, ...remaining] = [10, 20, 30, 40, 50];
// first: 10, second: 20, remaining: [30, 40, 50]
console.log("first:", first, "second:", second, "remaining: " + remaining)
console.log("type of `first`:", typeof first, "type of `remaining`: " + typeof remaining)

// 2. Rest Operator:  
function func(...args) {
   // all passed params been received as an array 
   console.log("after applying rest: ", args)
}
func(1, "masum", { a: 2 }, true);

