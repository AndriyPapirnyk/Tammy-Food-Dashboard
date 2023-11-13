import React from "react";
import "./AdminViews.css";
import Staff from "./Staff/Staff";
import Orders from "./Orders/Orders";

import { useSelector } from "react-redux";

export default function AdminViews() {
  const viewState = useSelector((state) => state.viewSlice.view);
  console.log(viewState);

  const list = {
    orders: <Orders />,
    staff: <Staff />,
  };

  return <div className="admin__views">{list[viewState]}</div>;
}
