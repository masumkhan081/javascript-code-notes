# Interview Notes: Currying in JavaScript

**What is Currying?**

Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

**Key Concepts:**

* **Transformation:** It converts a function `f(a, b, c)` into `f(a)(b)(c)`.
* **Single Arguments:** Each resulting function accepts only one argument.
* **Sequential Execution:** The functions are executed in a sequence, with each returning the next function in the chain until all arguments are provided.
* **Function Reusability and Composition:** Currying facilitates the creation of specialized functions by partially applying arguments, enhancing code reusability and enabling function composition.

**In simpler terms:**

Currying breaks down complex function calls into smaller, more manageable steps. Imagine you have a function that adds three numbers. Currying allows you to call it by providing one number at a time, each call returning a new function that waits for the next number.

**Example (Conceptual):**

Instead of:

```javascript
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // 6

function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

curriedAdd(1)(2)(3); // 6