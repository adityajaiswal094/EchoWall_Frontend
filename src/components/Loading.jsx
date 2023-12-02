import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="user-loading">
      <Spinner
        animation="border"
        role="status"
        style={{ color: "white" }}
      ></Spinner>
    </div>
  );
}
