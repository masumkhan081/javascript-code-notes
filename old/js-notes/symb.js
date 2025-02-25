var sym = Symbol('useless description');

var sym2 = Symbol();

console.log(sym)


var symb = Symbol.for('to be similar');
var symb2 = Symbol.for('to be similar');
console.log(symb == symb2)