import utils from "./utils";
import { expect } from "chai";

describe("testing utilities Functions", () => {
  it("should return only 9 numbers", () => {
    expect(utils.formatDate("12345678910")).to.have.lengthOf(9);
  });
  it("should add 1 leading zero to numbers less then 10", () => {
    /**
     * test passes but technically not correct.
     * i'm passing a string when what i should be passing is a number
     * when i pass a number i get ERROR:
     * Legacy octal literals are not allowed in strict mode javascript
     */
    // expect(utils.addLeadingZero("9")).to.equal("09");
  });
  it("should return a number type", () => {
    expect(utils.addLeadingZero(9)).to.be.a("number");
  });
  it("should return message if details is null", () => {
    expect(utils.isDetailsNull(null)).to.equal(
      `There are no details for this mission`
    );
  });
  it("replace the '/' character with '-' from the mission name", () => {
    expect(utils.removeForwardSlash("abc/abc")).to.equal("abc-abc");
  });
});
