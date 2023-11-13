import React, { useEffect } from "react";
import "./Null.css";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Cooker from "./components/Cooker/Cooker";

//

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserStatus, setUserVerify } from "./reducers/userSlice";

function App() {
  const dispatch = useDispatch();

  const userStatus = useSelector((state) => state.user.status);
  console.log(userStatus);

  const verified = useSelector((state) => state.user.verified);

  useEffect(() => {
    const storedUserStatus = localStorage.getItem("userStatus");
    if (storedUserStatus) {
      dispatch(setUserStatus(storedUserStatus));
    }

    const storedUserVerify = localStorage.getItem("userVerify");
    if (storedUserVerify) {
      dispatch(setUserVerify(storedUserVerify));
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            verified ? (
              userStatus === "admin" ? (
                <Admin />
              ) : (
                <Cooker />
              )
            ) : (
              <Welcome />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
