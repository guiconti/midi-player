import React from "react";

import Header from "../../elements/Header";
import BarContainer from "../../containers/BarContainer";

const Bar: React.FC = () => {
  return (
    <div>
      <Header>Bar</Header>
      <BarContainer />
    </div>
  );
};

export default Bar;
