import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Boilerplate</h1>

      <h2>Get Started</h2>
      <ol>
        <li>
          Go to <Link to="/example">example app</Link>
        </li>
        <li>
          Go to <Link to="/bar">foo app</Link>
        </li>
        <li>
          Go to <Link to="/foo">bar app</Link>
        </li>
      </ol>
    </div>
  );
};

export default HomePage;
