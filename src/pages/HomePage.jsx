import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Posts from "../components/Posts";
import Header from "../components/Header";
import { FetchPosts, Loading } from "../store/postReducer";
import axios from "axios";

export default function HomePage() {
  const [searchFilter, setSearchFilter] = useState("");

  const fetchPosts = useSelector((state) => state.posts.posts);
  const { totalPosts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const getPosts = async () => {
    dispatch(Loading());
    try {
      const feedUrl = `http://localhost:4000/v2/feed?searchFilter=${searchFilter}`;
      const response = await axios.get(feedUrl);
      const data = await response.data;
      dispatch(FetchPosts(data));
    } catch (error) {
      dispatch(FetchPosts([]));
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPosts]);

  return (
    <div className="homepage">
      <Header
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        getPosts={getPosts}
      />
      <Posts posts={fetchPosts} searchFilter={searchFilter} />
    </div>
  );
}
