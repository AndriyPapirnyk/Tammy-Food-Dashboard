import React from "react";
import "./Welcome.css";
import illustration from "./img/illustration.png";

//

import WelcomeMain from "./WelcomeMain/WelcomeMain";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <WelcomeMain />
      </div>
      <img className="welcome__illustration" src={illustration} alt="" />
    </div>
  );
}
