import React from "react";
import { mount } from "enzyme";
import BarContainer from "./BarContainer";
import BarText from "../elements/BarText";

describe("<BarContainer />", () => {
  it("should contain <BarText />", () => {
    const wrapper = mount(<BarContainer />);
    expect(wrapper.find(BarText).length).toEqual(2);
  });
});
