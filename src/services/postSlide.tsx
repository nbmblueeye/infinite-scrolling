import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../types/postType';

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: []
}

export const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    searchPost: (state, action) => {
      if(action.payload.length > 0) {
        state.posts = action.payload
      }else{
        state.posts = []
      }
    },
    resetPosts: (state) => {
      state.posts = []
    },
  },
})

export const { setPosts, searchPost, resetPosts } = postSlice.actions

export default postSlice.reducer