// Join two arrays:

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

// Join three arrays:

const ar1 = ["Cecilie", "Lone"];
const ar2 = ["Emil", "Tobias", "Linus"];
const ar3 = ["Robin"];
const child = ar1.concat(ar2, ar3);

/*
concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays
*/

//  multiple arrays concatation, array holding int, float, and string as value
let a = [1, 2];
console.log(
  a.concat([4, 5.05, 0], [4, 5, "end"], [4, "middle", 6], [4, 5, 6], [4, 5, 6])
);
