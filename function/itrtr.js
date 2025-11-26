let obj = {

    name: "fuck khan",
    age: 30,
}

let entrs = Object.entries(obj);
//console.log(entrs[1])
//
//
// below method doesn't work for object
let arr = [1, 2, 3, 4, 5, 6]
for (let i of arr) {
    // console.log(i)
}
//
// strange, works for string though
let str = "Hello"
for (let i of str) {
    // console.log(i)
}

console.log(dir(obj))