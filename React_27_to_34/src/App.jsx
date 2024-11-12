import React, { useState } from 'react'
import Header from './component/Header'
import "./App.css"
import FoodAdd from './component/FoodAdd'
import Container from './component/Container'
import ErrorMessage from './component/ErrorMessage'

const App = () => {

  const [todolist, setTodolist] = useState([])

  function HandleAddBtn(todoname,duedate){
    console.log(`Todoname: ${todoname}, Duedate:  ${duedate}`)
    let addnewItem = [
      ...todolist, {
        todoname,
        duedate,
      }
    ]
    setTodolist(addnewItem)
  }

  function HandleDeleteList(todolistname){
    const newItem = todolist.filter((item)=>{
      return item.todoname !== todolistname
    })

    setTodolist(newItem)
  }
  return (
    <>
    <Header Heading={"Food List"}></Header>
    <FoodAdd todoinfo ={HandleAddBtn}></FoodAdd>
    <ErrorMessage foodlist={todolist}></ErrorMessage>
    <Container todoListItem = {todolist} onDeleteClick = {HandleDeleteList}></Container>
    </>
  )
}

export default App