import {createSlice} from '@reduxjs/toolkit';

export const getPostsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    url: '',
  },
  reducers: {
    getPosts(state, action) {
      state.url = action.payload;
    },
    setPosts: (state, action) => {
      const {posts} = action.payload;
      state.posts = posts;
    },
  },
});

export const {getPosts, setPosts} = getPostsSlice.actions;
