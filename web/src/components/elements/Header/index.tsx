import React from "react";

import styles from "./Header.less";

const Header: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <h2 className={styles.header}>{children}</h2>
    </div>
  );
};

export default Header;
