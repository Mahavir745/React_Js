import React, { useContext } from 'react'
import Post from './Post'
import { PostListContent } from '../store/PostListStore'
import WelcomeMessage from './WelcomeMessage'

const PostList = () => {
  const {postlist} = useContext(PostListContent)
  return (
    <>
    {postlist.length === 0 && <WelcomeMessage/>}
    {postlist.map( post => <Post post={post} key={post.id}></Post>)}
    </>
  )
}

export default PostList