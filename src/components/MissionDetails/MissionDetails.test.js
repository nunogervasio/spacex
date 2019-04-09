import React from "react";
import { shallow } from "enzyme";
import MissionDetails from "./MissionDetails";

describe("Mission Details", () => {
  const props = {
    name: "",
    number: "",
    date: "",
    site: "",
    rocketName: "",
    rocketType: "",
    details: ""
  };
  const missionDetails = shallow(<MissionDetails {...props} />);
  it("renders properly", () => {
    expect(missionDetails).toMatchSnapshot();
  });
});
