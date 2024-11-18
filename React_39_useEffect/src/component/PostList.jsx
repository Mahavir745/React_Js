import React, { useContext, useEffect } from 'react'
import Post from './Post'
import { PostListContent } from '../store/PostListStore'
import WelcomeMessage from './WelcomeMessage'

const PostList = () => {
  const {postlist,addInitialPostList} = useContext(PostListContent)

  useEffect(()=>{
      fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched Posts:', data.posts); 
          addInitialPostList(data.posts);
        })
  },[])

  return (
    <div className='card-container'>
    {postlist.length === 0 && <WelcomeMessage/>}
    {postlist.map( post => <Post post={post} key={post.id}></Post>)}
    </div>
  )
}

export default PostList