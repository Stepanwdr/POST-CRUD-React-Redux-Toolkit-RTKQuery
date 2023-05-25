import { FC, useState,useEffect } from "react";

import { postApi } from "../services/PostServices";
import PostItem from "./PostItem";
import { userApi } from "../services/UserServices";
import { IPost } from "../models/IPost";

const PostContainer:FC=()=>{
  const[limit,setLimit]=useState(20)
const {data:posts,isLoading,isError,refetch}=postApi.useFetchAllPostsQuery(limit)
const [createPost,{error:createError,isLoading:createLoading}]=postApi.useCreatePostMutation()
const [deletePost,{error:deleteError,isLoading:deleteLoading}]=postApi.useDeletePostMutation()
const [updatePost,{error:updateError,isLoading:updateLoading}]=postApi.useUpdatePostMutation()

//pollingInterval:2000
const {data}=userApi.useFetchAllUsersQuery('')
console.log(data)

const handlePostCreate=async()=>{
  const title=prompt('Post title')
  await createPost({
    title,
    body:title,
  } as IPost)
}

return (
    <div className="post-container">
      <button onClick={()=>refetch()}>Refetch</button>
      <button onClick={handlePostCreate}>Add new post</button>
      {isLoading && (<div>Loading </div>)}
      {isError && (<h3>Eror </h3>)}
      {posts && posts.map((post)=>(
        <PostItem 
         remove={(post)=>deletePost(post)}
         update={(post)=>updatePost(post)}
         post={post} key={post.id}
         />
      ))}
    </div>
)
}
export default PostContainer