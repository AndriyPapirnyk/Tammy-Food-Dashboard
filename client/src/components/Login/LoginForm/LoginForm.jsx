import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserStatus, setUserVerify } from "../../../reducers/userSlice";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState("");
  const [inputValues, setInputValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function sendSignUpData(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/api/user/login", { inputValues })
        .then((response) => {
          console.log(response.data);
          dispatch(setUserStatus(response.data));
          localStorage.setItem("userStatus", response.data);
          response.status === 201 && setVerified(true);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("User not found...");
        });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function sendCodeData(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/api/user/verify-code", { code })
        .then((response) => {
          console.log(response.data);
          if (response.status === 201) {
            navigate(`/dashboard`);
            dispatch(setUserVerify(true));
            localStorage.setItem("userVerify", true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Wrong code, try again...");
        });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className="form__holder">
      {verified ? (
        <form action="POST" onSubmit={sendCodeData}>
          <h1>SMS Code</h1>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="number"
            placeholder="Code"
          />
          <button type="submit">Next</button>
        </form>
      ) : (
        <form action="POST" onSubmit={sendSignUpData}>
          <h1>Login</h1>
          <input
            value={inputValues.login}
            onChange={handleChange}
            type="text"
            placeholder="Login"
            name="login"
          />
          <input
            value={inputValues.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
          <button type="submit">Next</button>
        </form>
      )}
    </div>
  );
}
