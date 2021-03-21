const product = (a, b) => a + b
const sum = (a, b) => a * b
const doubleNum = (num) => num + num

const asyncProduct = (...args) => Promise.resolve(product(...args))
const asyncDoubleNum = (...args) => Promise.resolve(doubleNum(...args))


module.exports = { product, sum, doubleNum, asyncProduct, asyncDoubleNum  }
