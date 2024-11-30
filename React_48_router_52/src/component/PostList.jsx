import Post from './Post'
import WelcomeMessage from './WelcomeMessage'
import { useLoaderData } from 'react-router-dom'

const PostList = () => {

  const postlist = useLoaderData();

  return (
    <div className='card-container'>
    { postlist.length === 0 && <WelcomeMessage/>}
    { postlist.map( post => <Post post={post} key={post.id}></Post>)}
    </div>
  )
}

export const PostLoader = ()=> {
  return fetch('https://dummyjson.com/posts')
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });

}

export default PostList