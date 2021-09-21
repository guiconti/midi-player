import React from "react";
import Header from "../../elements/Header";
import FooContainer from "../../containers/FooContainer";

const Foo: React.FC = () => {
  return (
    <div>
      <Header>Foo</Header>
      <FooContainer />
    </div>
  );
};

export default Foo;
