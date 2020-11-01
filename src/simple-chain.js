const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (this.arr[position - 1]) {
      this.arr.splice(position - 1, 1);
      return this;
    }
    else {
      this.arr = [];
      throw new Error;

    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
