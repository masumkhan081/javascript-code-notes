//find() method retuns undefined if no elements are found

const ages = [3, 30, 18, 20, 25, 12];

function checkAge(age) {
    return age > 18;
}
// returns the first element that matches the condition.
console.log(ages.find(checkAge))
console.log(ages) // doesn't change array