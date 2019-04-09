import React from "react";
import { shallow } from "enzyme";
import Card from "../components/Card/Card";
import Home from "./Home";

describe("Home", () => {
  const props = { data: [] };
  const home = shallow(<Home {...props} />);

  it("renders properly", () => {
    expect(home).toMatchSnapshot();
  });

  //   it("renders <Card /> when passed in", () => {
  //     const wrapper = shallow(
  //       <Home>
  //         <Card />
  //       </Home>
  //     );
  //     expect(wrapper.contains(<Card />)).to.equal(true);
  //   });
});
