function withoutCurrying(a, b, c) {
    return a * b * c;
}
console.log(withoutCurrying(5, 6, 7));

function currying(a) {
    return function(b) {
        return function cds(c) {
            return a * b * c;
        }
    }
}
console.log(currying(5)(6)(7));

let step1 = currying(5);
//
let step2 = step1(6);
//
let step3 = step2(7);
//
console.log("at step3: " + step3)