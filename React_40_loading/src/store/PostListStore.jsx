import React, { createContext, useReducer } from 'react'

export const PostListContent = createContext(
  {
    postlist: [],
    addPostList: ()=>{},
    addInitialPostList : ()=>{},
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
  else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }  
  else if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter(post => post.id !== action.payload.id)
  }
  return newPostList
}

const PostListProvider = ({children}) => {
  const [postlist, dispatchPostLIst] = useReducer(postListReducer,[]);

  const addPostList = (id,userId,title,body,views,tags)=>{
    dispatchPostLIst({
      type: 'ADD_POST',
      payload: {
        id,userId,title,body,views,tags
      }
    })
  };

  const addInitialPostList = (posts)=>{
    dispatchPostLIst({
      type: 'ADD_INITIAL_POST',
      payload: {
        posts,
      }
    })
  };

  const deletePost = (id)=>{
    dispatchPostLIst({
      type: "DELETE_POST",
      payload: {
        id
      }
    })
  };

  return (
    <PostListContent.Provider value={
      {     
      postlist,
      addPostList,
      addInitialPostList,
      deletePost
      }
    }>
      {children}
    </PostListContent.Provider>
  )
}

export default PostListProvider