import React from "react";
import "./Member.css";
import axios from "axios";

export default function Member(props) {
  const deleteMember = () => {
    axios
      .post("http://localhost:8080/api/user/delete-user", {
        userId: props.itemId,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="staff__member">
      <h3>{props.name}</h3>
      <p>{props.email}</p>
      <p>{props.telephone}</p>
      <p>status: {props.status}</p>
      {props.status === "cooker" && (
        <button onClick={deleteMember}>Delete Member -</button>
      )}
    </div>
  );
}
