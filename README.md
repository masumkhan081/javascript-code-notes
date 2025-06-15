# javaScript code notes

- **https://github.com/masumkhan081/javascript-code-notes.git**

This repository contains notes and code snippets related to JavaScript programming, covering fundamental concepts, core libraries, and best practices. It serves as a personal reference for learning and consolidating knowledge in JavaScript, intended for personal use to reinforce understanding of JavaScript concepts.

## Topics Covered

This repository explores various JavaScript topics, including but not limited to:

- **Fundamentals:** Core JavaScript concepts.
- **Data Structures:** Sets, Lists, and related concepts.
- **Composition:** Function composition and its applications.
- **Error Handling:** Techniques for handling errors in JavaScript, including `try-catch`.
- **Higher-Order Functions:** Working with functions that operate on other functions.
- **Scope:** Understanding variable scope in JavaScript.
- **Hoisting:** How variable and function declarations are hoisted.
- **Closure:** How variable and function declarations are hoisted.
- **spread & res operator:** How variable and function declarations are hoisted.
- **Currying:** How variable and function declarations are hoisted.
- **Object-Oriented Programming (OOPs) in JavaScript:** Exploring OOP concepts in the context of JavaScript.
- **Arrays and Strings:** Working with arrays and strings in JavaScript.

# To DO List

1. JavaScript Execution Internals
   Why? Interviewers love asking about internals to test depth.

Event Loop (tick queue vs microtask queue)

this, closures, scopes, hoisting

call, apply, bind

Memory management (garbage collection, leaks)

✅ Next Step: Do a deep-dive with examples involving timers, promises, and DOM manipulation together.

✅ 2. Error Handling & Patterns
Why? Clean, fault-tolerant code is a mid-level expectation.

try/catch, optional chaining, nullish coalescing

Error boundaries in React

Global error handling in Express

✅ Next Step: Write a utility wrapper that converts any async function into a try/catch-safe one.

✅ 3. Data Structures & Algorithms in JavaScript
Why? Not CS-level DSA, but enough to solve real problems.

Arrays, objects, maps, sets – interview-oriented

Sorting, filtering, deduplication tricks

Recursion, reduce/accumulate, immutability

✅ Next Step: Practice 10 LeetCode/Easy-Medium problems using only native JS (no Lodash).

✅ 4. Frontend React (Advanced Concepts)
Why? Employers expect more than just components now.

Custom hooks

Context API & reducer pattern

React Query / TanStack Query

Performance tuning (memo, lazy, suspense)

Form handling (react-hook-form, zod/yup)

✅ Next Step: Build a form wizard with custom hooks + context + validation.

✅ 5. Backend with Express.js / Node.js
Why? As a MERN dev, back-end is half your stack.

Routing, middleware patterns

Error handling & logging

JWT auth, sessions

File uploads, rate limiting

REST vs GraphQL (intro level)

✅ Next Step: Create a small API with auth, error logging, and role-based access.

✅ 6. MongoDB (with Mongoose)
Why? Must know schemas, relationships, and querying.

Schema types & validation

Population (ref-based relationships)

Aggregation pipelines

Indexes, performance tuning

✅ Next Step: Create a schema design for blog-posts with comments and user roles.

🧠 Optional Bonus (for confidence boost):
Git best practices (feature branching, squash merges)

CI/CD basics (GitHub Actions or Vercel/Netlify)

Testing (Jest + React Testing Library + supertest)

## Usage

This repository is primarily for personal reference. Feel free to browse the files and code snippets. If you find anything useful, you are welcome to adapt it for your own learning. However, keep in mind that this repository is a work in progress and may be updated or modified over time.

## Contributing

Contributions are not expected as this is a personal learning repository.

## License

This repository is intended for personal use and the content within is not subject to a formal license. However, please be respectful of any code or ideas that may be derived from other sources.

# JavaScript Array Notes

## Fundamentals

- **Definition:** Arrays are ordered collections of values. They can hold values of any data type (including other arrays).
- **Creation:**
  - `let myArray = [];` (Empty array)
  - `let myArray = [1, 2, "three", { key: "value" }];` (Array with mixed data types)
  - `let myArray = new Array(1, 2, 3);` (Using the `Array` constructor)
- **Indexing:** Elements are accessed using zero-based indexing (e.g., `myArray[0]` for the first element).
- **Length:** The `length` property returns the number of elements in the array.

## Common Array Methods

### Modification

- **`push(element)`:** Adds an element to the end of the array. Returns the new length.
- **`pop()`:** Removes the last element from the array. Returns the removed element.
- **`unshift(element)`:** Adds an element to the beginning of the array. Returns the new length.
- **`shift()`:** Removes the first element from the array. Returns the removed element.
- **`splice(startIndex, deleteCount, ...items)`:**
  - Removes elements from `startIndex` with `deleteCount`.
  - Inserts `items` at `startIndex`.
  - Returns an array of the removed elements.
- **`fill(value, startIndex, endIndex)`:** Fills a portion of the array with a static value.
- **`reverse()`:** Reverses the order of the elements in the array. Modifies the original array.
- **`sort(compareFunction)`:** Sorts the elements of the array. Modifies the original array.
  - If `compareFunction` is omitted, elements are sorted lexicographically (string comparison).
  - For numeric sorting: `array.sort((a, b) => a - b);` (ascending), `array.sort((a,b) => b-a);` (descending)

### Access and Transformation

- **`slice(startIndex, endIndex)`:** Returns a shallow copy of a portion of the array. Does not modify the original array.
- **`concat(...arrays)`:** Returns a new array that is the concatenation of the original array and the given arrays. Does not modify the original arrays.
- **`join(separator)`:** Returns a string by concatenating all of the elements in an array, separated by the specified separator.
- **`indexOf(element, startIndex)`:** Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- **`lastIndexOf(element, startIndex)`:** Returns the last index at which a given element can be found in the array, or -1 if it is not present.
- **`includes(element, startIndex)`:** Determines whether an array includes a certain element, returning `true` or `false`.
- **`toString()`:** Returns a string representing the array and its elements.

### Iteration

- **`forEach(callback)`:** Executes a provided function once for each array element.
- **`map(callback)`:** Creates a new array with the results of calling a provided function on every element in the calling array.
- **`filter(callback)`:** Creates a new array with all elements that pass the test implemented by the provided function.
- **`reduce(callback, initialValue)`:** Executes a reducer function (provided by you) on each element of the array, resulting in a single output value.
- **`reduceRight(callback, initialValue)`:** Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
- **`some(callback)`:** Tests whether at least one element in the array passes the test implemented by the provided function. Returns a Boolean value.
- **`every(callback)`:** Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean value.
- **`find(callback)`:** Returns the value of the first element in the provided array that satisfies the provided testing function.
- **`findIndex(callback)`:** Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
- **`entries()`:** Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

## Destructuring Arrays

- `let [first, second, ...rest] = myArray;` (Extracts elements into variables)

## Spread Operator

- `let newArray = [...myArray, 4, 5];` (Creates a new array with elements from `myArray` and additional elements)

## Array-like Objects

- `arguments` object in functions.
- DOM NodeLists.
- Can be converted to arrays using `Array.from()` or the spread operator.

## Multidimensional Arrays

- Arrays containing other arrays.
- Access elements using multiple indices (e.g., `my2DArray[row][column]`).

## Things to remember for Interviews

- Array methods are crucial. Practice using `map`, `filter`, `reduce`, `forEach`, and `sort`.
- Understand the difference between methods that modify the original array and those that return a new array.
- Be comfortable with array destructuring and the spread operator.
- Know how to handle array-like objects.
- Understand the time complexity of common array operations.
