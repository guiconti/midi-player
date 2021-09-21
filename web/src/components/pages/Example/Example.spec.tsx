import React from "react";
import { shallow } from "enzyme";
import Example from ".";
import Header from "../../elements/Header";

describe("<Example />", () => {
  it('should have a div with "root" class', () => {
    const wrapper = shallow(<Example />);
    const actual = wrapper.find("div").prop("className");
    const expected = "root";

    expect(actual).toEqual(expected);
  });

  it("should have a <Header />", () => {
    const wrapper = shallow(<Example />);

    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('should have a <Header /> with "title" containing Example', () => {
    const wrapper = shallow(<Example />);
    const actual = wrapper.find(Header).prop("title");
    const expected = "Example";

    expect(actual).toEqual(expected);
  });

  it("should have one full width xs12 paper", () => {
    const wrapper = shallow(<Example />);
    const actual = wrapper.findWhere((n) => n.prop("xs") === 12).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it("should have two half width xs6 paper", () => {
    const wrapper = shallow(<Example />);
    const actual = wrapper.findWhere((n) => n.prop("xs") === 6).length;
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  it("should have four a quarter width xs3 paper", () => {
    const wrapper = shallow(<Example />);
    const actual = wrapper.findWhere((n) => n.prop("xs") === 3).length;
    const expected = 4;

    expect(actual).toEqual(expected);
  });

  it("should have a link to a 404 page", () => {
    const wrapper = shallow(<Example />);
    const actual = wrapper.findWhere((n) => n.prop("to") === "/badlink").length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
