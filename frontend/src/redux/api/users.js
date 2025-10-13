import { USER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login: builder.mutation({
            query: (data)=>({
                url:`${USER_URL}/auth`,
                method:"POST",
                body: data,
            })
        }),

        register: builder.mutation({
            query: (data)=>({
                url:`${USER_URL}`,
                method: "POST",
                body:data
            })
        })
    })
})

export const {useLoginMutation, useRegisterMutation} = userApiSlice;