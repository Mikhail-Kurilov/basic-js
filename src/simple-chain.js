const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value ? value.toString() : value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (position >= this.arr.length || isNaN(position-0) || position <= 0) {
      this.arr = [];
      throw 'THROWN';
    }
    this.arr.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.arr.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = `${this.arr.join('~~')}`;
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
