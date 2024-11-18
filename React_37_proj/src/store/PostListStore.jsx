import React, { createContext, useReducer } from 'react'

export const PostListContent = createContext(
  {
    postlist: [],
    addPostList: ()=>{},
    deletePost: ()=>{}
  }
);

const postListReducer = (currPostList,action)=>{

  let newPostList = currPostList;
  if(action.type === "ADD_POST"){
    newPostList = [
      action.payload,...currPostList
    ]
  }
  else if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter(post => post.id !== action.payload.id)
  }
  return newPostList
}

const PostListProvider = ({children}) => {
  const [postlist, dispatchPostLIst] = useReducer(postListReducer,[]);

  const addPostList = (id,userId,title,body,reactions,tags)=>{
    dispatchPostLIst({
      type: 'ADD_POST',
      payload: {
        id,userId,title,body,reactions,tags
      }
    })
  }

  const deletePost = (id)=>{
    dispatchPostLIst({
      type: "DELETE_POST",
      payload: {
        id
      }
    })
  }

  return (
    <PostListContent.Provider value={
      {     
      postlist,
      addPostList,
      deletePost
      }
    }>
      {children}
    </PostListContent.Provider>
  )
}

export default PostListProvider