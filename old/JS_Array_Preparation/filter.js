/*
filter() method creates a new array filled with elements that pass a test provided by
a function
*/
const ages = [32, 33, 16, 12, 40, 55];
const result = ages.filter(checkAdult);
//
console.log(ages); // no changes in original array
console.log("adults: " + result); // filtered output
//
function checkAdult(age) {
    return age >= 18;
}
//
console.log("non-adults: " + ages.filter((age) => {
    return age < 18
}))