import React from "react";
import "./OrdersExtraItem.css";
import pizza1 from "./img/1.png";
import pizza2 from "./img/2.png";
import pizza3 from "./img/3.png";
import pizza4 from "./img/4.png";
import pizza5 from "./img/5.png";
import pizza6 from "./img/6.png";
import pizza7 from "./img/7.png";
import pizza8 from "./img/8.png";

export default function OrdersExtraItem(props) {
  const imageSources = {
    1: pizza1,
    2: pizza2,
    3: pizza3,
    4: pizza4,
    5: pizza5,
    6: pizza6,
    7: pizza7,
    8: pizza8,
  };

  const src = imageSources[props.itemId];

  return (
    <div className="order__extra-item">
      <img src={src} alt="" />
      <p>{props.name}</p>
      <p>{props.count}</p>
      <span>${props.price * props.count}</span>
    </div>
  );
}
