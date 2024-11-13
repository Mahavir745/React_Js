import React, { useContext } from 'react'
import { TodoItems } from '../store/todo_items_store'

const Todolist = ({todoname,tododate}) => {
 
  const {deleteItem} = useContext(TodoItems)

  return (
    <div className='listContainer'>
      <div className='foodItem'>
        <div>{todoname}</div>
        <div>{tododate}</div>
        <div>
        <button onClick={()=>deleteItem(todoname)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todolist