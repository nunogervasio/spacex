function formatDate(date) {
  return date.slice(0, 9);
}

function addLeadingZero(number) {
  return number > 9 ? number : "0" + number;
}

// export default formatDate;
module.exports.formatDate = formatDate;
module.exports.addLeadingZero = addLeadingZero;
