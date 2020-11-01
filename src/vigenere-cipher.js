const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') throw new Error;
    let result = '';
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(count % key.length)) % 26 + 65);
        count++;
      }
      else
        result += message[i];
    }
    if (this.type == false) result = result.split('').reverse().join('');
    return result;

  }
  decrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') throw new Error;
    let result = '';
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) % 26 + 65);
        count++;
      }
      else
        result += message[i];
    }
    if (this.type == false) result = result.split('').reverse().join('');
    return result;

  }
}

module.exports = VigenereCipheringMachine;
