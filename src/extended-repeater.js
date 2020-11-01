const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  let result = '';
  let part = '';
  if (addition !== undefined) {
    part = addition;
    if (additionRepeatTimes && additionRepeatTimes > 0) {
      part = '';
      for (let i = 0; i < additionRepeatTimes; i++) {
        if (i < additionRepeatTimes - 1) {
          part += addition + (additionSeparator ? additionSeparator : '|');  
        } else {
          part += addition;
        }
      }     
    }
  }
  if (repeatTimes && repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
      if (i < repeatTimes - 1) {
        result += str + part + (separator ? separator : '+');
      } else {
        result += str + part;
      }
    }
  } else {
    result = str + part;
  }
  return result;
};
  