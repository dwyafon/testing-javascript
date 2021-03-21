const { asyncProduct, asyncDoubleNum } = require('../math')

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

// test utility --
async function test(title, callback) {
  try {
    await callback()
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
