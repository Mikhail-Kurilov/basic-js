const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
    let arr = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        if (members[i][0] == ' ') {
          arr.push(members[i][1]);
        } else if (members[i][0] === members[i][0].toLowerCase()) {
          arr.push(members[i][0].toUpperCase());
        } else
        arr.push(members[i][0]);
      }
    }
    return arr.sort().join('');
  }
  return false;
};
