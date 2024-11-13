import { useContext } from 'react'
import { TodoItems } from '../store/todo_items_store'

const ErrorMessage = () => {

  const todoListItem = useContext(TodoItems).items

  return (
    <>
      {todoListItem.length === 0 && <h1 style={{textAlign:"center"}}>All tasks has been done.</h1>}
    </>
  )
}

export default ErrorMessage