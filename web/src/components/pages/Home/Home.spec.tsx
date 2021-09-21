import React from "react";
import { shallow } from "enzyme";
import Home from ".";

describe("<Home />", () => {
  it('should have a header called "Boilerplate"', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find("h1").text();
    const expected = "Boilerplate";

    expect(actual).toEqual(expected);
  });

  it('should have a header called "Get Started"', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find("h2").text();
    const expected = "Get Started";

    expect(actual).toEqual(expected);
  });

  it("should link to example", () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.findWhere((n) => n.prop("to") === "/example").length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it("should link to bar", () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.findWhere((n) => n.prop("to") === "/bar").length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it("should link to foo", () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.findWhere((n) => n.prop("to") === "/foo").length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
