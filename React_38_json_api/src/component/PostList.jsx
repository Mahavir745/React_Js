import React, { useContext, useEffect } from 'react'
import Post from './Post'
import { PostListContent } from '../store/PostListStore'
import WelcomeMessage from './WelcomeMessage'

const PostList = () => {
  const {postlist,addInitialPostList} = useContext(PostListContent)

  function HandlefetchBtn() {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Posts:', data.posts); 
        addInitialPostList(data.posts);
      })
  }
  

  return (
    <>
    {postlist.length === 0 && <WelcomeMessage HandlefetchBtn={HandlefetchBtn}/>}
    {postlist.map( post => <Post post={post} key={post.id}></Post>)}
    </>
  )
}

export default PostList