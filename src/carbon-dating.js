const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && sampleActivity instanceof String) {
    let numberSampleActivity = sampleActivity - 0;
    if (isNaN(numberSampleActivity) || numberSampleActivity < 0) {
      return false;
    } 
    return Math.ceil((-HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / numberSampleActivity)) / 0.693)
  }
  return false;
};
