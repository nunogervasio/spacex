function formatDate(date) {
  return date.slice(0, 9);
}

//change flight number to string in order to add leading zero
function addLeadingZero(number) {
  if (number > 9) {
    return `${number}`;
  } else {
    return `0${number}`;
  }
}

function isDetailsNull(details) {
  return details !== null ? details : `There are no details for this mission`;
}

function removeForwardSlash(details) {
  return details.replace(/[\/]/g, "-");
}

// export default formatDate;
module.exports.formatDate = formatDate;
module.exports.addLeadingZero = addLeadingZero;
module.exports.isDetailsNull = isDetailsNull;
module.exports.removeForwardSlash = removeForwardSlash;
