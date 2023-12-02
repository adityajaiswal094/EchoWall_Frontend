import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { IncreaseCount } from "../store/postReducer";

export default function ModalBox({ showModal, handleClose }) {
  const [content, setContent] = useState("");

  const { user, username } = useSelector((state) => state.user);
  const totalPosts = useSelector((state) => state.posts.totalPosts);

  const dispatch = useDispatch();

  const contentHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const addNewPostHandler = async () => {
    try {
      const postUrl = "http://localhost:4000/v2/feed";

      const post = {
        name: user,
        username: username,
        content: content,
      };

      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(postUrl, post);
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = (e) => {
    if (content !== "") {
      e.preventDefault();
      addNewPostHandler();
      dispatch(IncreaseCount(totalPosts + 1));
      handleClose();
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Modal.Body>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              placeholder="What's on your mind?!"
              as="textarea"
              rows={3}
              value={content}
              onChange={contentHandler}
            />
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
