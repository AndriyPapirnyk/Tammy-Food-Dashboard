import React from "react";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";

//

import illustration from "./img/illustration.png";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img className="login__illustration" src={illustration} alt="" />
        <LoginForm />
      </div>
    </div>
  );
}
