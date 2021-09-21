import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import Example from "./pages/Example";
import Foo from "./pages/Foo";
import Bar from "./pages/Bar";
import NotFound from "./pages/NotFound";

import styles from "./App.less";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavLink exact to="/" activeClassName={styles.activeStyle}>
          Home
        </NavLink>
        {" | "}
        <NavLink exact to="/example" activeClassName={styles.activeStyle}>
          Example
        </NavLink>
        {" | "}
        <NavLink to="/foo" activeClassName={styles.activeStyle}>
          Foo
        </NavLink>
        {" | "}
        <NavLink to="/bar" activeClassName={styles.activeStyle}>
          Bar
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={Example} />
        <Route path="/foo" component={Foo} />
        <Route path="/bar" component={Bar} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
