import React, { useState, useEffect } from "react";
import "./OrdersList.css";
import OrderCard from "./OrderCard/OrderCard";
import socketIO from "socket.io-client";

//

import { useDispatch } from "react-redux";
import { setAmount } from "../../../../../../reducers/orderSlice";

//

const socket = socketIO.connect("http://localhost:8080");

export default function OrdersList(props) {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const searchQuery = props.searchQuery;
  console.log(searchQuery);
  const filteredOrders = list.filter((item) => {
    return (
      item.clientInfo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ordersDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ordersNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.clientInfo.street
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.totalPrice.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  useEffect(() => {
    // setInterval(() => {
    fetch("http://localhost:8080/api/user/orders")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setList(data);
        dispatch(setAmount(data.length));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    // }, 5000);
  }, [dispatch]);

  return (
    <div className="orders__list">
      {filteredOrders.map((item) => (
        <OrderCard
          key={item.ordersNumber}
          orderId={item._id}
          name={`${item.clientInfo.name} ${item.clientInfo.surname}`}
          date={item.ordersDate}
          number={item.ordersNumber}
          street={item.clientInfo.street}
          totalPrice={item.totalPrice}
        />
      ))}
    </div>
  );
}
