import React from "react";
import "./AdminNav.css";
import ordersIcon from "./img/orders.png";
import staffIcon from "./img/staff.png";
import websiteIcon from "./img/website.png";
import quitIcon from "./img/quit.png";

//

import { useDispatch } from "react-redux";
import { setView } from "../../../reducers/viewSlice";
import { useNavigate } from "react-router-dom";
import { setUserVerify } from "../../../reducers/userSlice";

export default function AdminNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuit = () => {
    navigate("/");
    dispatch(setUserVerify(false));
  };
  const handleRedirect = () => {
    const redirectToURL = "https://tammy-food-client.vercel.app/";
    window.location.href = redirectToURL;
  };
  return (
    <nav className="admin__nav">
      <h1 className="admin__nav-logo">
        T<span>F</span>
      </h1>
      <div className="admin__nav-options">
        <div
          onClick={() => dispatch(setView("orders"))}
          className="admin__nav-option"
        >
          <img src={ordersIcon} alt="" />
          <span>Orders</span>
        </div>

        <div
          onClick={() => dispatch(setView("staff"))}
          className="admin__nav-option"
        >
          <img src={staffIcon} alt="" />
          <span>Staff</span>
        </div>
        <div className="admin__nav-option" onClick={handleRedirect}>
          <img src={websiteIcon} alt="" />
          <span>Website</span>
        </div>
        <div className="admin__nav-option" onClick={handleQuit}>
          <img src={quitIcon} alt="" />
          <span>Quit</span>
        </div>
      </div>
    </nav>
  );
}
