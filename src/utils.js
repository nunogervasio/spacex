// TODO: use date-fns to return a more readable date

export function formatDate(date) {
  return date.slice(0, 9);
}

export function addLeadingZero(number) {
  if (number > 9) {
    return `${number}`;
  } else {
    return `0${number}`;
  }
}

export function isDetailsNull(details) {
  return details !== null ? details : `There are no details for this mission`;
}

export function removeForwardSlash(details) {
  return details.replace(/[\/]/g, "-");
}
