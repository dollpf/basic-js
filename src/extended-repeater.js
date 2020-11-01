const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options

  str += (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  return (str + separator).repeat(repeatTimes - 1) + str;
}
