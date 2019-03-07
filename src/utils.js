function formatDate(date) {
  return date.slice(0, 9);
}

function addLeadingZero(number) {
  return number > 9 ? number : parseInt(`0${number}`);
}

function isDetailsNull(details) {
  return details !== null ? details : `There are no details for this mission`;
}

function removeForwardSlash(details) {
  return details.replace(/\//i, "-");
}

// export default formatDate;
module.exports.formatDate = formatDate;
module.exports.addLeadingZero = addLeadingZero;
module.exports.isDetailsNull = isDetailsNull;
module.exports.removeForwardSlash = removeForwardSlash;
// module.exports.testing = testing;
