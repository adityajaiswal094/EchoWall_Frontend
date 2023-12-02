import React from "react";
import "../styles/styles.css";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

export default function Posts({ posts, searchFilter }) {
  const isLoading = useSelector((state) => state.posts.isLoading);

  return isLoading ? (
    <div className="posts posts-loading">
      <Spinner
        animation="border"
        role="status"
        style={{ color: "white" }}
      ></Spinner>
    </div>
  ) : (
    <div className="posts">
      {posts.length !== 0 ? (
        posts.map((item, ind) => <PostCard key={ind} item={item} />)
      ) : searchFilter !== "" ? (
        <>
          <h6 className="text-center text-white">No matching results found!</h6>
        </>
      ) : (
        <>
          <h6 className="text-center text-white">No posts to show</h6>
          <h6 className="text-center text-white">
            Create a post to let people know about you!
          </h6>
        </>
      )}
    </div>
  );
}
