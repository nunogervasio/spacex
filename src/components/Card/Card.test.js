import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  const props = {
    patch_url: "",
    name: ""
  };
  const card = shallow(<Card {...props} />);
  it("renders properly", () => {
    expect(card).toMatchSnapshot();
  });
});
