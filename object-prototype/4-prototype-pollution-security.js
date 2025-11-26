// 4. Prototype Pollution and Security

// Prototype pollution vulnerability
const userInput = '{"__proto__": {"isAdmin": true}}';
const data = JSON.parse(userInput);

// This pollutes Object.prototype!
Object.assign({}, data);
console.log({}.isAdmin); // true - SECURITY ISSUE!

// Safe way: Create object without prototype
const safeData = Object.assign(Object.create(null), JSON.parse(userInput));
console.log(safeData.isAdmin); // undefined

// Another pollution example
function merge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

const malicious = JSON.parse('{"__proto__": {"polluted": true}}');
merge({}, malicious);
console.log({}.polluted); // true - POLLUTED!

// Prevention: Use Object.create(null) or check for __proto__
function safeMerge(target, source) {
  const result = Object.create(null);
  for (const key in source) {
    if (source.hasOwnProperty(key) && key !== '__proto__') {
      result[key] = source[key];
    }
  }
  return result;
}

/*
Edge Cases:
- JSON.parse can create __proto__ properties
- for...in loops see prototype properties
- Object.keys() vs for...in differences

Interview Tip: Prototype pollution is a serious security vulnerability
Real-world: Input validation, secure object merging, avoiding prototype manipulation
*/
