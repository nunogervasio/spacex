import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("Footer", () => {
  const notFound = shallow(<NotFound />);
  it("renders properly", () => {
    expect(notFound).toMatchSnapshot();
  });
});
