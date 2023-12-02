import React, { useState } from "react";
import "../styles/styles.css";
import { Loading, SetUser } from "../store/userReducer";
import { useDispatch } from "react-redux";

export default function User() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const userHandler = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (user !== "" && username !== "") {
      dispatch(Loading());
      dispatch(SetUser({ user: user, username: username }));
    }
  };

  return (
    <div className="userpage">
      <form className="user-form-flex" onSubmit={formSubmitHandler}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Enter name"
          aria-label="Name"
          style={{ backgroundColor: "#065c7d", border: "none" }}
          onChange={userHandler}
        />
        <input
          className="form-control me-2"
          type="text"
          placeholder="Enter username"
          aria-label="Username"
          style={{ backgroundColor: "#065c7d", border: "none" }}
          onChange={usernameHandler}
        />
        <button className="user-button" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}
