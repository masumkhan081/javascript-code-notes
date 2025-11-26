/*
reduce() method returns a single value: the function's accumulated result
without changing original array
*/
numbers = [175, 50, 25];

function myFunc(total, num) {
    return total - num;
}
console.log(numbers.reduce(myFunc))

numbers = [15.5, 2.3, 1.1, 4.7];
console.log(numbers.reduce(getSum, 0));

function getSum(total, num) { // total start from 0
    console.log(total + "   " + num) // value of total and num at per step
    return total + Math.round(num);
}

numbers = [175, 50, 25];
numbers.reduceRight(myFunc); // returns single accumulated result

function myFunc(total, num) {
    return total - num;
}