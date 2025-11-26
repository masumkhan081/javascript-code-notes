const ages = [3, 10, 18, 20, 12, 30];

console.log(ages.findIndex(checkAge));

function checkAge(age) {
    return age > 18;
}