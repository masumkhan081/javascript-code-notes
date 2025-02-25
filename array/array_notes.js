/*
Arrays are ordered collections of values. They can hold values of any data type (including other arrays).
*/
let arr = [];  // empty array
arr = [1, 2, "three", { key: "value" }];
console.log("myArray:", arr);
console.log("myArray[0]:", arr[0]);
console.log("myArray.length:", arr.length);

// Modification
console.log("\n--- Modification ---");
arr.push(4);
console.log("push(4):", arr);
arr.pop();
console.log("pop():", arr);
arr.unshift(0);
console.log("unshift(0):", arr);
arr.shift();
console.log("shift():", arr);
arr.splice(1, 1, "two-changed");
console.log("splice(1, 1, 'two-changed'):", arr);
arr.reverse();
console.log("reverse():", arr);
arr.sort();
console.log("sort():", arr); // sorts alphabetically, so the object will be at the start

let numberArray = [5, 2, 9, 1, 5, 6];
numberArray.sort((a, b) => a - b);
console.log("numberArray.sort((a, b) => a - b):", numberArray);
numberArray.sort((a, b) => b - a);
console.log("numberArray.sort((a,b) => b-a):", numberArray);

// Access and Transformation
console.log("\n--- Access and Transformation ---");
let slicedArray = arr.slice(1, 3);
console.log("slice(1, 3):", slicedArray);
console.log("original myArray:", arr); // slice doesn't modify original

let concatenatedArray = arr.concat([5, 6]);
console.log("concat([5, 6]):", concatenatedArray);
console.log("original myArray:", arr); // concat doesn't modify original

console.log("join(', '):", arr.join(", "));
console.log("indexOf('two-changed'):", arr.indexOf("two-changed"));
console.log("includes('two-changed'):", arr.includes("two-changed"));

// Iteration
console.log("\n--- Iteration ---");
arr.forEach((element, index) => {
   console.log("forEach:", index, element);
});

let mappedArray = arr.map((element) => {
   if (typeof element === 'string') {
      return element.toUpperCase();
   }
   return element;
});
console.log("map():", mappedArray);

let filteredArray = numberArray.filter((element) => element > 3);
console.log("filter():", filteredArray);

let reducedValue = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("reduce():", reducedValue);

let someResult = numberArray.some((element) => element > 8);
console.log("some():", someResult);

let everyResult = numberArray.every((element) => element > 0);
console.log("every():", everyResult);

let foundElement = numberArray.find((element) => element === 5);
console.log("find():", foundElement);

let foundIndex = numberArray.findIndex((element) => element === 9);
console.log("findIndex():", foundIndex);

// Destructuring Arrays
console.log("\n--- Destructuring Arrays ---");
let [first, second, ...rest] = arr;
console.log("destructuring:", first, second, rest);

// Spread Operator
console.log("\n--- Spread Operator ---");
let newArray = [...arr, 4, 5];
console.log("spread:", newArray);

// Multidimensional Arrays
console.log("\n--- Multidimensional Arrays ---");
let multiArray = [[1, 2], [3, 4], [5, 6]];
console.log("multiArray:", multiArray);
console.log("multiArray[1][0]:", multiArray[1][0]);

// Array.from
console.log("\n--- Array.from ---");
function arrayFromExample() {
   const args = Array.from(arguments);
   console.log(args)
}

arrayFromExample(1, 2, 3, 4);