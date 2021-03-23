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
        if (actual !== expected) {
          throw new Error(`${actual} is not strictly equal to ${expected}`)
        }
      },
    }
  }

  global.test = test
  global.expect = expect