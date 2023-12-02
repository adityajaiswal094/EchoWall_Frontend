/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../styles/styles.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { Loading, Logout } from "../store/userReducer";

export default function Header({ searchFilter, setSearchFilter, getPosts }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const searchFilterHandler = (e) => {
    e.preventDefault();
    setSearchFilter(e.target.value);
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    await getPosts();
    // setSearchFilter("");
  };

  return (
    <>
      {showModal && (
        <Modal showModal={showModal} handleClose={handleModalClose} />
      )}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#032837" }}
      >
        <div className="container-fluid">
          <h4 className="navbar-brand" href="#" style={{ color: "white" }}>
            EchoWall
          </h4>

          <form className="d-flex" role="search" onSubmit={searchSubmitHandler}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={{ backgroundColor: "#065c7d", border: "none" }}
              value={searchFilter}
              onChange={searchFilterHandler}
            />
            <button className="normal-button" type="submit">
              Search
            </button>
          </form>

          <button className="btn btn-2" onClick={handleModalOpen}>
            + Create new post
          </button>

          <button
            className="user-button"
            onClick={() => {
              dispatch(Loading());
              dispatch(Logout());
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
