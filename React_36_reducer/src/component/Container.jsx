import React, { useContext } from 'react'
import Todolist from './Todolist'
import { TodoItems } from '../store/todo_items_store'

const Container = () => {

  const todoListItem = useContext(TodoItems)

  return (
    <>
    {todoListItem["items"].map((item,index)=>(
        <Todolist 
        todoname={item.todoname}
        tododate={item.duedate.split("-").reverse().join("-")} key={`${item.todoname}${index}`}
        ></Todolist>
    ))}
    </>
  )
}

export default Container