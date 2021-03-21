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


