import React from "react";

interface BarTextProps {
  somethingDynamic: string;
}

// The way we use the props here doesn't make any sense, it's just for demonstration
const BarText: React.FC<BarTextProps> = ({
  children,
  somethingDynamic,
}: React.PropsWithChildren<BarTextProps>) => {
  return (
    <p>
      This is a Bar text - {children} {somethingDynamic}
    </p>
  );
};

export default BarText;
