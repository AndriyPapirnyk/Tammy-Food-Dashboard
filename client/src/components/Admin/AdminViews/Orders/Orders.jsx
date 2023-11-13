import React from "react";
import "./Orders.css";
import OrdersMain from "./OrdersMain/OrdersMain";
import OrdersExtra from "./OrdersExtra/OrdersExtra";

//

export default function Orders() {
  return (
    <div className="admin__orders">
      <OrdersMain />
      <OrdersExtra />
    </div>
  );
}
