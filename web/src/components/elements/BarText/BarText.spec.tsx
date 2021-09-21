import React from "react";
import { shallow } from "enzyme";
import BarText from ".";

describe("<BarText />", () => {
  const fixedText = "Bar is being";
  const dynamicText = "tested";

  it("should have a text using the fixedText and dynamicText variables", () => {
    const wrapper = shallow(
      <BarText somethingDynamic={dynamicText}>{fixedText}</BarText>
    );
    const actual = wrapper.find("p").text();
    const expected = `This is a bar text - ${fixedText} ${dynamicText}`;

    expect(actual).toEqual(expected);
  });
});
