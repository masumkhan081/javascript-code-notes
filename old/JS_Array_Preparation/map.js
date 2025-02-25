let numbers = [4, 9, 16, 20];
/*
Return new array with the square root of all element values
*/
const newArr = numbers.map(Math.sqrt)
console.log(newArr)

console.log(numbers.map((arr) => {
    return arr + 2;
}))