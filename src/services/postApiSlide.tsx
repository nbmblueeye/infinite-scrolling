import { apiSlice } from "./apiSlide";
import { Post } from "../types/postType";

const userApiSlide:any = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.mutation<Post[], {skip:number, limit: number}>({
      query: (data) => ({
        url: `/products?limit=${data.limit}&skip=${data.skip}`,
        method: "GET",
      }),
      invalidatesTags:['Posts'],
    }),
    searchPosts: builder.mutation<Post[], {search:string, skip:number, limit: number}>({
      query: (data) => ({
        url: `/products/search?q=${data.search}&limit=${data.limit}&skip=${data.skip}`,
        method: "GET",
      }),
      invalidatesTags:['Posts'],
    }),
  }),
})

export const { useGetPostsMutation,  useSearchPostsMutation} = userApiSlide