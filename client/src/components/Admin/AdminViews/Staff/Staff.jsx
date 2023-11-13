import React, { useState } from "react";
import "./Staff.css";
import StaffList from "./StaffList/StaffList";
import AddMember from "./AddMember/AddMember";
import { useSelector, useDispatch } from "react-redux";
import { showPopup, hidePopup } from "../../../../reducers/addMemberSlice";

export default function Staff() {
  const showPopupState = useSelector((state) => state.memberSlice.showPopup);
  const showAmount = useSelector((state) => state.amountSlice.amount);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const handlePopupClick = () => {
    if (showPopupState) {
      dispatch(hidePopup());
    } else {
      dispatch(showPopup());
    }
  };

  return (
    <div className="admin__staff">
      {showPopupState && <AddMember />}
      <header className="admin__staff-header">
        <h1>Staff List</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p>Total: {showAmount}</p>
      </header>
      <StaffList searchQuery={searchQuery} />
      <button className="admin__staff-addButton" onClick={handlePopupClick}>
        Add Member +
      </button>
    </div>
  );
}
