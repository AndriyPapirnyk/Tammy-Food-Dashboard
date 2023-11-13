import React from "react";
import "./WelcomeMain.css";

//

import { useNavigate } from "react-router-dom";

export default function WelcomeMain() {
  const navigate = useNavigate();

  const getLoginPage = () => {
    navigate("/login");
  };

  return (
    <main className="welcome__main">
      <div className="welcome__main-tip">For best team!</div>
      <h1>
        Discover Our Favourite <br /> Dashboard for <span>Tammy Food</span>
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />{" "}
        industry. Lorem Ipsum has been the industry's standard dummy <br /> text
        ever since the 1500s.
      </p>
      <div className="welcome__main-row">
        <button onClick={getLoginPage}>Login</button>
        <button>Our Shop</button>
      </div>
    </main>
  );
}
