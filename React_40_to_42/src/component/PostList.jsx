import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostListContent } from '../store/PostListStore'
import WelcomeMessage from './WelcomeMessage'
import Loading from './Loading'

const PostList = () => {
  const {postlist,addInitialPostList} = useContext(PostListContent)

  const [fetching,setFetching] = useState(false)

 

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true)
      fetch('https://dummyjson.com/posts' , {signal})
        .then((res) => res.json())
        .then((data) => {
          addInitialPostList(data.posts);
          setFetching(false)
        });
        
        return (
          ()=>{
            controller.abort()
          }
        )
  },[])

  return (
    <div className='card-container'>
    {fetching && <Loading/>}
    {!fetching && postlist.length === 0 && <WelcomeMessage/>}
    {!fetching && postlist.map( post => <Post post={post} key={post.id}></Post>)}
    </div>
  )
}

export default PostList