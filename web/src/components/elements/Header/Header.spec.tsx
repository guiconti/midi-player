import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("<Header />", () => {
  const title = "Test title";

  it("should have a text using the fixedText and dynamicText variables", () => {
    const wrapper = shallow(<Header>{title}</Header>);
    const actual = wrapper.find("h2").text();
    const expected = title;

    expect(actual).toEqual(expected);
  });
});
