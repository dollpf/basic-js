const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let diskTurns = 2 ** disksNumber - 1;
  let sec = diskTurns / turnsSpeed * 3600;
  let result = {
    turns: diskTurns,
    seconds: Math.floor(sec)
  };
  return result;
};
