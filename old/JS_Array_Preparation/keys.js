let fruits = ["Banana", "Orange", "Apple", "Mango"];
//   returns an Array Iterator object with the keys of an array
let keys = fruits.keys();
console.log(keys); // Array iterator Object
console.log("type: " + typeof keys)
    //
for (let x of keys) {
    console.log(x + " ")
}
//
keys = Object.keys(fruits);
console.log("type: " + typeof keys)
console.log("keys: " + keys)
    //
for (let x of keys) {
    console.log(x + ": " + x[0])
}