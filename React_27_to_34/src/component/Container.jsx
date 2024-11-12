import React from 'react'
import Todolist from './Todolist'

const Container = ({todoListItem,onDeleteClick}) => {
  return (
    <>
    {todoListItem.map((item,index)=>(
        <Todolist 
        todoname={item.todoname}
        tododate={item.duedate.split("-").reverse().join("-")} key={`${item.todoname}${index}`}
        onDeleteClick = {onDeleteClick}
        ></Todolist>
    ))}
    </>
  )
}

export default Container