let ages = [32, 33, 16, 40];
//
console.log(ages.every(checkAge));

function checkAge(age) { // passing a function
    return age > 18;
}
console.log(ages.every((ag) => { // using arrow function
    return ag > 12;
}))


ages = [3, 10, 18, 20];

let sign = ages.some(checkAdult);

function checkAdult(age) {
    return age > 18;
}
console.log("Test-Some-Status: " + sign);