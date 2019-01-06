import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";

describe("Component: Card", () => {
  /**
   * TODO
   */
  it.skip("should start with a full list", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("data")).to.be.an("array").that.is.empty;
  });
  it.skip("simulate an error that trigers the catch in the fetch", () => {});
  /**
   * TODO: test that the right props got passed in to Card
   */
});
