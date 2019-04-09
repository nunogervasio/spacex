import React from "react";
import { shallow } from "enzyme";
import Patch from "./Patch";

describe("Patch", () => {
  const props = {
    patch_url: ""
  };
  const patch = shallow(<Patch {...props} />);
  it("renders properly", () => {
    expect(patch).toMatchSnapshot();
  });
});
