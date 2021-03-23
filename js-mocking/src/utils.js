function rpsGenerator() {
  // property of the the utils module
  const number = Math.floor(Math.random() * 300) + 1
  return number <= 100
    ? 'rock'
    : number > 100 && number <= 200
    ? 'paper'
    : 'scissors'
}

module.exports = { rpsGenerator }
