import React from "react";
import { shallow } from "enzyme";
import Foo from ".";
import Header from "../../elements/Header";
import FooContainer from "../../containers/FooContainer";

describe("<Foo />", () => {
  it("should have a <Header /> element", () => {
    const wrapper = shallow(<Foo />);

    expect(wrapper.find(Header).length).toEqual(1);
  });

  it("should have a <FooContainer /> element", () => {
    const wrapper = shallow(<Foo />);

    expect(wrapper.find(FooContainer).length).toEqual(1);
  });
});
