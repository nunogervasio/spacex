import React from "react";
import Header from "./Header";

import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";

describe("Component: Header", () => {
  it.skip("should render h1 and ul", () => {});
  it("renders the class .main-header .name . main-nav", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".main-header")).to.have.lengthOf(1);
    expect(wrapper.find(".name")).to.have.lengthOf(1);
  });
  it.skip("renders 4 <a /> components", () => {});
});
