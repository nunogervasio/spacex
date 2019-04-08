import {
  formatDate,
  addLeadingZero,
  isDetailsNull,
  removeForwardSlash
} from "./utils";

describe("formatDate", () => {
  it("should return only 9 numbers", () => {
    expect(formatDate("12345678910")).toEqual("123456789");
  });
});

describe("addLeadingZero", () => {
  it("should return a string type", () => {
    expect(addLeadingZero(9)).toEqual("09");
  });
  it("should add 1 leading zero to numbers less then 10", () => {
    expect(addLeadingZero(9)).toEqual("09");
  });
  it("should return a number > than 9", () => {
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
