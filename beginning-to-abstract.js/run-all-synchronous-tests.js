const { double } = require('webidl-conversions')
const { product, sum, doubleNums } = require('../math')

test('The product function multiples two numbers', () => {
  const result = product(10, 10)
  const expected = 100
  expect(result).toBe(expected)
})

test('The sum function adds two numbers', () => {
  const result = sum(10, 10)
  const expected = 20
  expect(result).toBe(expected)
})

test('The doubleNum function doubles a number', () => {
  const result = doubleNums(10)
  const expected = 20
  expect(result).toBeStrictlyEqualTo(expected)
})


// test utility -- 
function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}: passed`)
  } catch (error) {
    console.error(`✕ ${title}: ${error}`)
  }
}

// returns an object with assertions
function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeStrictlyEqualTo(expected) {
      if (!(actual === expected)) {
        throw new Error(`${actual} is not strictly equal to ${expected}`)
      }
    },
  }
}
