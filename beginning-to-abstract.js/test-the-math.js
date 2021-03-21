const { product } = require('../math')

let result, expected

result = product(5, 10)
expected = 50
expect(result).toBe(expected) // calls expect -- return value is an object; toBe(), as a method on that object, is called, and the error is thrown
expect(result).toBeGreaterThan(expected)

// returns an object with an assertion
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeGreaterThan(expected) {
      if (!(actual > expected)) {
        throw new Error(`${actual} is not greater than ${expected}`)
      }
    },
  }
}
