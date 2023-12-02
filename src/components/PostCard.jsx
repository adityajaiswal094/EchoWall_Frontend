import React, { useState } from "react";
import "../styles/styles.css";
import Sidebar from "./Sidebar";

export default function PostCard({ item }) {
  const [showCommentsSection, setShowCommentsSection] = useState(false);

  const showCommentsHandler = () => {
    setShowCommentsSection(!showCommentsSection);
  };

  return (
    <div className="card post-style">
      <div className="card-body">
        <h5 className="card-title text-white">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-white text-white-50">
          @{item.username}
        </h6>
        <p className="card-text text-white">{item.content}</p>
        <div style={{ position: "absolute", bottom: "1rem" }}>
          <button className="user-button" onClick={showCommentsHandler}>
            Comments
          </button>
        </div>
      </div>

      {showCommentsSection && (
        <Sidebar
          showSidebar={showCommentsSection}
          showCommentsHandler={showCommentsHandler}
          post={item}
        />
      )}
    </div>
  );
}
