import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  post: {},
  totalPosts: 0,
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    Loading: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    FetchPosts: (state, action) => {
      const posts = action.payload;
      return {
        ...state,
        isLoading: false,
        posts: posts,
        totalPosts: posts.length,
      };
    },

    IncreaseCount: (state, action) => {
      const totalPosts = action.payload;

      return {
        ...state,
        totalPosts: totalPosts,
      };
    },
  },
});

export const { Loading, FetchPosts, IncreaseCount } = postSlice.actions;
export default postSlice.reducer;
