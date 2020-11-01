const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array))
    throw Error;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (let i = result.length-1; i >= 0; i--) {
    if (result[i] == `--discard-next`) {
      if (result[i+1]) {
        result.splice(i, 2);
      } else {
        result.splice(i, 1);
      }
      continue;
    }
    if (result[i] == `--discard-prev`) {
      if (result[i-1]) {
        result.splice(i-1, 2);
      } else {
        result.splice(i, 1);
      }
      continue;
    }
    if (result[i] == `--double-next`) {
      if (result[i+1]) {
        result[i] = result[i+1];
      } else {
        result.splice(i, 1);
      }
      continue;
    }
    if (result[i] == `--double-prev`) {
      if (result[i-1]) {
        result[i] = result[i-1];
      } else {
        result.splice(i, 1);
      }
      continue;
    }
  }
  return result;
  /*let newArray = [];
  let j = arr.length;
  for (let i = 0; i < j; i++) {
    if (arr[i] == `--discard-next`) {
      if (arr[i + 1] !== null) {
        arr[i + 1] = null;
        newArray.push(arr[i + 1]);
      }
      else continue;
    } else if (arr[i] == `--discard-prev`) {
      if (arr[i - 1] !== null) {
        arr[i - 1] = null;
        newArray.push(arr[i - 1]);
      }
      else continue;
    } else if (arr[i] == `--double-next`) {
      if (arr[i + 1] !== null) {
        arr[i + 1] = arr[i + 1] * 2;
        newArray.push(arr[i + 1] * 2);
      }
      else continue;
    } else if (arr[i] == `--double-prev`) {
      if (arr[i - 1] !== null) {
        arr[i - 1] = arr[i - 1] * 2;
        newArray.push(arr[i - 1] * 2);
      }
      else continue;
    } else newArray.push(arr[i]);
  }
  return newArray;*/
};
