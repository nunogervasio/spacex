import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";
import { Patch } from "../Patch";

describe("Patch component:", () => {
  it("renders three <Patch /> components", () => {
    const wrapper = shallow(<Patch />);
    expect(wrapper.find(".img")).to.have.lengthOf(1);
  });
});

// TODO: this test fails!
// TODO: putting together tests for this app
