const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let convertedMembers = members.filter(x => typeof x === 'string').map(x => x.trim()[0].toUpperCase());
  return convertedMembers.sort().join('');
};
