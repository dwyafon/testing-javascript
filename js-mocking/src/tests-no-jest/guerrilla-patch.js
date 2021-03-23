const assert = require('assert')
const rockPaperScissors = require('../rock-paper-scissors')
const utils = require('../utils')

const originalRPSGenerator = utils.rpsGenerator

// guerrilla-patch
utils.rpsGenerator = () => 'rock'

const winner = rockPaperScissors('Audrey', 'Dale')
assert.strictEqual(winner, 'Dale')

// clean up -- return original value to utility function
utils.rpsGenerator = originalRPSGenerator
