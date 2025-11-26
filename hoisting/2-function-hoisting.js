// 2. Function Hoisting and Declaration vs Expression

// Function declaration: Fully hoisted
hoistedFunction(); // Works!

function hoistedFunction() {
  console.log('Function declaration hoisted');
}

// Function expression: Not hoisted
try {
  notHoisted(); // TypeError: notHoisted is not a function
} catch (e) {
  console.log('Function expression not hoisted:', e.message);
}

var notHoisted = function() {
  console.log('Function expression');
};

// Arrow function expression: Same as regular function expression
try {
  arrowFunc(); // ReferenceError
} catch (e) {
  console.log('Arrow function not hoisted:', e.message);
}

var arrowFunc = () => console.log('Arrow function');

// Hoisting in conditional blocks
if (true) {
  function conditionalFunc() {
    console.log('Conditional function');
  }
}
conditionalFunc(); // Works in most browsers (implementation dependent)

/*
Edge Cases:
- Function declarations in blocks (different behavior across engines)
- Named function expressions create variable in scope
- Hoisting precedence: function > var

Interview Tip: Always declare functions before use for consistency
Real-world: Module loading, function organization, avoiding hoisting bugs
*/
