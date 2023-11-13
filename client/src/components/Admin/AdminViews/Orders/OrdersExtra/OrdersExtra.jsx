import React from "react";
import axios from "axios";
import "./OrdersExtra.css";
import OrdersExtraItem from "./OrdersExtraItem/OrdersExtraItem";

//

import { useSelector } from "react-redux";

export default function OrdersExtra() {
  const orderData = useSelector((state) => state.orderSlice.order);
  const userStatus = useSelector((state) => state.user.status);
  console.log(orderData);

  const declineOrder = () => {
    const orderId = orderData._id;
    axios
      .post("http://localhost:8080/api/user/decline-order", {
        orderId: orderId,
      })
      .then((responce) => {
        console.log(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const completeOrder = () => {
    const orderId = orderData._id;
    axios
      .post("http://localhost:8080/api/user/complete-order", {
        orderId: orderId,
      })
      .then((responce) => {
        console.log(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="orders__extra">
      {orderData ? (
        <>
          <div className="orders__extra-header">
            <div className="row">
              <h1>Order {orderData.ordersNumber}</h1>
              <div>{orderData.status}</div>
              <div>{orderData.ordersDate}</div>
            </div>
            <div className="orders__extra-clientInfo">
              <h1>Client</h1>
              <h3>
                {orderData.clientInfo.name} {orderData.clientInfo.surname}
              </h3>
              <p>{orderData.clientInfo.street}</p>
            </div>
          </div>
          <div className="orders__extra-list">
            <h1>List</h1>
            <div>Amount: {orderData.order.length}</div>
            {orderData.order.map((item) => (
              <OrdersExtraItem
                key={item.id}
                itemId={item.id}
                name={item.name}
                count={item.count}
                price={item.price}
              />
            ))}
          </div>
          <h1>Total price: {orderData.totalPrice}$</h1>
          {orderData.status !== "Completed" && (
            <div className="orders__extra-options">
              <button onClick={completeOrder}>Complete Order</button>
              {userStatus === "admin" && (
                <button onClick={declineOrder}>Decline Order</button>
              )}
            </div>
          )}
        </>
      ) : (
        <h1>Choose Order...</h1>
      )}
    </div>
  );
}
