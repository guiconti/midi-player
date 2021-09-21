import React from "react";
import { shallow } from "enzyme";
import NotFound from ".";

describe("<NotFound />", () => {
  it("should have a header called '404 Page Not Found'", () => {
    const wrapper = shallow(<NotFound />);
    const actual = wrapper.find("h4").text();
    const expected = "404 Page Not Found";

    expect(actual).toEqual(expected);
  });

  it("should link to home", () => {
    const wrapper = shallow(<NotFound />);
    const actual = wrapper.findWhere((n) => n.prop("to") === "/").length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
