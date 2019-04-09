import React from "react";
import { shallow } from "enzyme";
import CardDetails from "./CardDetails";

describe("Footer", () => {
  const props = {
    patch_url: "",
    number: "",
    name: "",
    date: "",
    site: "",
    rocketName: "",
    rocketType: "",
    details: "",
    youtube_url: "",
    wiki_url: ""
  };
  const cardDetails = shallow(<CardDetails {...props} />);
  it("renders properly", () => {
    expect(cardDetails).toMatchSnapshot();
  });
});
