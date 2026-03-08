exports.value = 2

const a = require("./a")

console.log("from b, a.value:", a.value)

exports.value = 4
