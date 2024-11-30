import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost, { CreatePostAction } from './component/CreatePost.jsx'
import PostList, { PostLoader } from './component/PostList.jsx'

const route = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      { path: "/", element: <PostList /> ,loader: PostLoader},
      { path: "/create-post", element: <CreatePost />, action: CreatePostAction }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
