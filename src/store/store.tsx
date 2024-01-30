import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../services/postSlide.tsx';
import { apiSlice } from '../services/apiSlide.tsx';


export const store = configureStore({
  reducer: {

    [apiSlice.reducerPath]: apiSlice.reducer,
    posts: postReducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
