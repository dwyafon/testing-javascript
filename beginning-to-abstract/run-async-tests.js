const { asyncProduct, asyncDoubleNum } = require('../math')

// test(title, callback)
test('The asyncProduct function multiples two numbers', async () => {
  const result = await asyncProduct(10, 10)
  const expected = 100
  expect(result).toBe(expected)
})

test('The asyncDoubleNum function doubles a number', async () => {
  const result = await asyncDoubleNum(10)
  const expected = 20
  expect(result).toBeStrictlyEqualTo(expected)
})

