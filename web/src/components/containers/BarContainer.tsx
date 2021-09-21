import React, { useState, useEffect } from "react";

import BarText from "../elements/BarText";
import retrieveExample from "../../apis/retrieveExample";

const BarContainer: React.FC = () => {
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
      <BarText somethingDynamic={example}>The example value is</BarText>
      <BarText somethingDynamic={anotherExample}>
        The another example value is
      </BarText>
    </div>
  );
};

export default BarContainer;
