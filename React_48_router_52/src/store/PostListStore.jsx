import React, { createContext, useCallback,useReducer} from 'react'

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

  const addPostList = (post)=>{
    dispatchPostLIst({
      type: 'ADD_POST',
      payload: {
        id:Date.now(),post
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

  const deletePost = useCallback((id)=>{
    dispatchPostLIst({
      type: "DELETE_POST",
      payload: {
        id
      }
    })
  }, [dispatchPostLIst]);


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