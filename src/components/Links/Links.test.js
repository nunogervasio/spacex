import React from "react";
import { shallow } from "enzyme";
import Links from "./Links";

describe("Links", () => {
  const props = {
    youtube_url: "",
    youtubeImg: "",
    wiki_url: "",
    wikiImg: ""
  };
  const links = shallow(<Links {...props} />);

  it("renders properly", () => {
    expect(links).toMatchSnapshot();
  });

  it("anchor tag links to url", () => {
    //   TODO
  });
});
