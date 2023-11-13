import React, { useState } from "react";
import "./OrdersMain.css";
import OrdersList from "./OrdersList/OrdersList";
import OrdersArchive from "./OrdersArchive/OrdersArchive";

//

import { useSelector, useDispatch } from "react-redux";
import { showPopup, hidePopup } from "../../../../../reducers/archiveSlice";

export default function OrdersMain() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.orderSlice.amount);
  const showPopupState = useSelector((state) => state.archiveSlice.showPopup);

  const handlePopupClick = () => {
    if (showPopupState) {
      dispatch(hidePopup());
    } else {
      dispatch(showPopup());
    }
  };

  return (
    <main className="orders__main">
      <header className="orders__main-header">
        <h1>Orders</h1>
        <div className="row">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handlePopupClick}>Archive</button>
        </div>
        <p>Total: {amount}</p>
      </header>
      <OrdersList searchQuery={searchQuery} />
      {showPopupState && <OrdersArchive />}
    </main>
  );
}
