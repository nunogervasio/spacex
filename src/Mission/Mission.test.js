import React from "react";
import { shallow } from "enzyme";
import Mission from "./Mission";
import CardDetails from "../components/CardDetails/CardDetails";

describe("Mission", () => {
  const props = {
    data: [],
    match: { params: { name: "" } }
  };
  const mission = shallow(<Mission {...props} />);

  it("renders properly", () => {
    expect(mission).toMatchSnapshot();
  });

  it("creates a <CardDetails /> component", () => {
    // expect(mission.find("CardDetails").exists()).toBe(true);
  });
});
