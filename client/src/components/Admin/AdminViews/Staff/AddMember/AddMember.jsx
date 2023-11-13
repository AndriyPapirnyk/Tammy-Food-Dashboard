import React, { useState } from "react";
import "./AddMember.css";
import axios from "axios";

import { useDispatch } from "react-redux";
import { hidePopup } from "../../../../../reducers/addMemberSlice";

export default function AddMember() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    status: "cooker",
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/user/add-member", formData)
      .then((response) => {
        console.log(response.data);
        response.status === 201 && dispatch(hidePopup());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="staff__addMember">
      <h1>New Member Info:</h1>
      <form action="POST">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="telephone"
          placeholder="Telephone"
          value={formData.telephone}
          onChange={handleInputChange}
        />
        <label htmlFor="status">Choose Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        >
          <option value="admin">Admin</option>
          <option value="cooker">Cooker</option>
        </select>
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={formData.login}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={handleSubmit}>Add +</button>
    </div>
  );
}
