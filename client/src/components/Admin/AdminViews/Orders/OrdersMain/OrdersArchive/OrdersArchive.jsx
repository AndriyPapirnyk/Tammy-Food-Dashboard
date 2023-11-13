import React, { useEffect, useState } from "react";
import "./OrdersArchive.css";
import OrderCard from "../OrdersList/OrderCard/OrderCard";

//

export default function OrdersArchive() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/user/completed-orders")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="orders__archive">
      <h1>Archive</h1>
      {list.map((item) => (
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
