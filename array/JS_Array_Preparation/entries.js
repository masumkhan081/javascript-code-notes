// Create an Array Iterator, and then iterate over the key/value pairs
let fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
//
for (let x of f) {
    console.log(x)
}
for (let x of f) {
    console.log(x[1])
}
for (let x of f) {
    console.log(x[0])
}
/*
Syntax
array.entries()
*/