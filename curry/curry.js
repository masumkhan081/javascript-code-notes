
function sum(a, b, c) {
   return a + b + c;
}
function sumWithCurry(a) {
   return function (b) {
      return function (c) {
         return a + b + c;
      }
   }
}
console.log("sum: regular func: " + sum(1, 2, 3));
console.log("sum: curry func: " + sumWithCurry(1)(2)(3));
// 
const summation = (a, b) => a + b
const product = (a, b) => a * b

function operation(func) {
   return function (x, y) {
      return func(x, y)
   }
}
console.log("operation: summation: " + operation(summation)(4, 5))
console.log("operation: product: " + operation(product)(4, 5))

function operationWithCurry(func) {
   return function (x) {
      return function (y) {
         return func(x, y);
      }
   }
}
console.log("operation-with-curry: summation: " + operationWithCurry(summation)(4)(5))
console.log("operation-with-curry: product: " + operationWithCurry(product)(4)(5))

