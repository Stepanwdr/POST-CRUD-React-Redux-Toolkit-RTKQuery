import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const userApi=createApi({
reducerPath:'userApi',
baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
endpoints:(build)=>({
    fetchAllUsers:build.query({
        query:()=>({
           url:"/users"
        }),
    })
})
})

