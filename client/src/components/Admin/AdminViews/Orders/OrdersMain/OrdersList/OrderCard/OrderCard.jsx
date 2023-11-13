import React from "react";
import "./OrderCard.css";
import axios from "axios";

//

import { useDispatch } from "react-redux";
import { setItem } from "../../../../../../../reducers/orderSlice";

export default function OrderCard(props) {
  const dispatch = useDispatch();
  const setData = () => {
    axios
      .post("http://localhost:8080/api/user/find-order", {
        orderId: props.orderId,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setItem(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="orders__orderCard" onClick={setData}>
      <div className="orders__orderCard-main">
        <h3>{props.number}</h3>
        <p>
          {props.name} <span>{props.street}</span>
        </p>
      </div>
      <div className="orders__orderCard-additional">
        <div>{props.date}</div>
        <p>Total: {props.totalPrice}$</p>
      </div>
    </div>
  );
}
