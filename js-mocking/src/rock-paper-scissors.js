const utils = require('./utils')

function rockPaperScissors(player1, player2) {
  let player1Result = utils.rpsGenerator()
  let player2Result = utils.rpsGenerator()

  return player1Result === player2Result
    ? 'Tie'
    : player1Result === 'rock' && player2Result === 'paper'
    ? `${player2} wins`
    : player1Result === 'rock' && player2Result === 'scissors'
    ? `${player1} wins`
    : player1Result === 'paper' && player2Result === 'rock'
    ? `${player1} wins`
    : player1Result === 'paper' && player2Result === 'scissors'
    ? `${player2} wins`
    : player1Result === 'scissors' && player2Result === 'rock'
    ? `${player2} wins`
    : player1Result === 'scissors' && player2Result === 'paper'
    ? `${player1} wins`
    : null
}

module.exports = rockPaperScissors

