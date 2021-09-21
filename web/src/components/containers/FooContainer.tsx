import React, { useState, useEffect } from "react";

import FooText from "../elements/FooText";
import retrieveExample from "../../apis/retrieveExample";

const FooContainer: React.FC = () => {
  const [example, setExample] = useState<string>("An example");
  const [anotherExample, setAnotherExample] =
    useState<string>("Another example");

  useEffect(() => {
    retrieveExample("A delayed example").then((value: string) =>
      setExample(value)
    );
    retrieveExample("Another delayed example").then((value: string) =>
      setAnotherExample(value)
    );
  }, []);

  return (
    <div>
      <FooText somethingDynamic={example}>The example value is</FooText>
    </div>
  );
};

export default FooContainer;
