import React, { useState } from 'react'
import Header from './component/Header'
import "./App.css"
import FoodAdd from './component/FoodAdd'
import Container from './component/Container'
import ErrorMessage from './component/ErrorMessage'
import { TodoItems } from './store/todo_items_store'

const App = () => {

  const [todolist, setTodolist] = useState([])

  function AddNewItem(todoname,duedate){
    console.log(`Todoname: ${todoname}, Duedate:  ${duedate}`)

    //** functional updates: 
    setTodolist((currentValue) => [
        ...currentValue, {
          todoname,
          duedate,
        }
    ])
  }

  function DeleteItem(todolistname){
    const newItem = todolist.filter((item)=>{
      return item.todoname !== todolistname
    })

    setTodolist(newItem)
  }
  return (
    <TodoItems.Provider value={{
      items: todolist,
      addNewItem: AddNewItem,
      deleteItem: DeleteItem,
      heading: "Food List"
      }}>
    <center >
    <Header></Header>
    <FoodAdd></FoodAdd>
    <ErrorMessage ></ErrorMessage>
    <Container></Container>
    </center>

    </TodoItems.Provider>
  )
}

export default App