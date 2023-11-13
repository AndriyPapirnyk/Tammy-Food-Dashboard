import React from "react";
import "./Admin.css";
import AdminNav from "./AdminNav/AdminNav";
import AdminViews from "./AdminViews/AdminViews";

export default function Admin() {
  return (
    <div className="dashboard__admin">
      <AdminNav />
      <AdminViews />
    </div>
  );
}
