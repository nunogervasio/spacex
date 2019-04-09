import {
  formatDate,
  addLeadingZero,
  isDetailsNull,
  removeForwardSlash
} from "./utils";

describe("formatDate", () => {
  it("should return data", () => {
    expect(formatDate("2006-03-25T10:30:00+12:00")).toBeDefined();
  });
  it("should a formated date", () => {
    expect(formatDate("2006-03-25T10:30:00+12:00")).toEqual("24 Mar 2006");
  });
});

describe("addLeadingZero", () => {
  it("should return a string type", () => {
    expect(addLeadingZero(9)).toEqual("09");
  });
  it("should add 1 leading zero to numbers less then 10", () => {
    expect(addLeadingZero(9)).toEqual("09");
  });
  it("should return a number when > than 9", () => {
    expect(addLeadingZero(10)).toEqual("10");
  });
});

describe("isDetailsNull", () => {
  it("should return message if details is null", () => {
    expect(isDetailsNull(null)).toEqual(
      `There are no details for this mission`
    );
  });
  it("should return mission details if not null", () => {
    expect(isDetailsNull("mission details")).toEqual("mission details");
  });
});

describe("removeForwardSlash", () => {
  it("should replace the '/' character with '-' from the mission name", () => {
    expect(removeForwardSlash("abc/abc")).toEqual("abc-abc");
  });
});
