import { Form, redirect} from 'react-router-dom'

const CreatePost = () => {

  return (
    <Form method='POST' style={{width: "80%", margin: 40}} className='bg-secondary-subtle rounded p-3'>
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">User Id: </label>
      <input type="text" className="form-control" id="userId" placeholder='enter your id:' name="userId"/>
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" placeholder='Give your post title.' name="title"/>
    </div>
    <div className="mb-3">
      <label htmlFor="post" className="form-label">Post: </label>
      <textarea type="text" className="form-control" id="post" rows={5} style={{resize: "none"}} placeholder='Write your post here....' name="body"/>
    </div>
    <div className="mb-3">
      <label htmlFor="views" className="form-label"> Reactions: </label>
      <input type="text" className="form-control" id="views" placeholder='How many reactions you have' name="views"/>
    </div>
    <div className="mb-3">
      <label htmlFor="tag" className="form-label"> Tags: </label>
      <input type="text" className="form-control" id="tag" placeholder='Enter your tags' name="tags"/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </Form>
  )
}

export async function CreatePostAction(data){

  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ")

  console.log(postData)
  return redirect("/")
}

export default CreatePost