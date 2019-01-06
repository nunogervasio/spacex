import React from "react";
import Footer from "./Footer";

import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";

describe("Component: Footer", () => {
  it("renders the class .main-footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".main-footer")).to.have.lengthOf(1);
  });
});
