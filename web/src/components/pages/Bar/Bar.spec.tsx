import React from "react";
import { shallow } from "enzyme";
import Bar from ".";
import Header from "../../elements/Header";
import BarContainer from "../../containers/BarContainer";

describe("<Bar />", () => {
  it("should have a <Header /> element", () => {
    const wrapper = shallow(<Bar />);

    expect(wrapper.find(Header).length).toEqual(1);
  });

  it("should have a <BarContainer /> element", () => {
    const wrapper = shallow(<Bar />);

    expect(wrapper.find(BarContainer).length).toEqual(1);
  });
});
