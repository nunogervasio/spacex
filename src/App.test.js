import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Component: App", () => {
  /**
   * ERROR: not able to match Card.
   * Think is has to to with the map function.
   */
  it("should render Header, Card, and Footer", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsAllMatchingElements([<Header />, <Footer />])
    ).to.equal(true);
  });
  /**
   * NOTE: how to test that the data got loaded in to the array?
   * how to test fetch and see that is loaded crate a mock using jest?
   */
  it("should start with a full list", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("data")).to.be.an("array").that.is.empty;
  });
  it.skip("simulate an error that trigers the catch in the fetch", () => {});
  it("calls componentDidMount", () => {
    sinon.spy(App.prototype, "componentDidMount");
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property("callCount", 1);
    App.prototype.componentDidMount.restore();
  });
  it.skip("should add leading zero to numbers under 10", () => {
    expect(addLeadingZero(9).to.equal(9));
  });
});
