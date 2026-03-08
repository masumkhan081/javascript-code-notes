exports.value = 1

const b = require("./b")

console.log("from a, b.value:", b.value)

exports.value = 3
