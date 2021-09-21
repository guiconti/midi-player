import React from "react";
import { mount } from "enzyme";
import FooContainer from "./FooContainer";
import FooText from "../elements/FooText";

describe("<FooContainer />", () => {
  it("should contain <FooText />", () => {
    const wrapper = mount(<FooContainer />);
    expect(wrapper.find(FooText).length).toEqual(2);
  });
});
