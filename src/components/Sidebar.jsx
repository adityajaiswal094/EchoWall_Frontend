import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "../styles/styles.css";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Sidebar({
  showSidebar,
  showCommentsHandler,
  post,
  ...props
}) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  const { user, username } = useSelector((state) => state.user);

  const newCommentHandler = (e) => {
    setNewComment(e.target.value);
  };

  const addNewComment = async (e) => {
    e.preventDefault();

    const addCommentUrl = `http://localhost:4000/add/comment/${post.id}`;

    const response = await axios.post(addCommentUrl, {
      name: user,
      username: username,
      comment: newComment,
    });

    setComments((prevState) => [response.data, ...prevState]);
    setNewComment("");
  };

  return (
    <>
      <Offcanvas
        className="sidebar"
        placement="end"
        show={showSidebar}
        onHide={showCommentsHandler}
        {...props}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="card post-in-comment">
            <div className="card-body">
              <h5 className="card-title text-white">{post.name}</h5>
              <h6 className="card-subtitle mb-2 text-white text-white-50">
                @{post.username}
              </h6>
              <p className="card-text text-white">{post.content}</p>
            </div>
          </div>

          <form
            className="d-flex"
            onSubmit={addNewComment}
            style={{ width: "100%", marginBottom: '20px' }}
          >
            <input
              className="form-control me-2"
              type="text"
              value={newComment}
              onChange={newCommentHandler}
              placeholder="Add a comment..."
              aria-label="Search"
              style={{
                width: "calc(100% - 80px)",
                backgroundColor: "#065c7d",
                border: "none",
              }}
            />
            <button className="normal-button" type="submit">
              Comment
            </button>
          </form>

          {/* render all the comments */}
          {comments &&
            comments.map((item, ind) => (
              <div key={ind} className="card comment-style">
                <div className="card-body">
                  <h5
                    className="card-title text-white"
                    style={{ fontSize: "18px" }}
                  >
                    {item.name}
                  </h5>
                  <h6
                    className="card-subtitle mb-2 text-white text-white-50"
                    style={{ fontSize: "14px" }}
                  >
                    @{item.username}
                  </h6>
                  <p
                    className="card-text text-white"
                    style={{ fontSize: "14px" }}
                  >
                    {item.comment}
                  </p>
                </div>
              </div>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
