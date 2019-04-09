import { format } from "date-fns";

export function formatDate(date) {
  return format(new Date(date), "DD MMM YYYY");
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
