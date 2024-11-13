import { useReducer } from "react";
import { createContext } from "react";

export const TodoItems = createContext({
  items: [],
  addNewItem: () => { },
  deleteItem: () => { },
});


const todoitemsReducer = (currentTodoItem, action) => {

  let newTodoItem = currentTodoItem;

  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currentTodoItem, {
        todoname: action.payload.todoname,
        duedate: action.payload.duedate
      }
    ]
  }
  else if (action.type === "DELETE_ITEM") {
    newTodoItem = currentTodoItem.filter((item) => {
      return item.todoname !== action.payload.todoname
    })
  }
  return newTodoItem;
}


const TodoitemsContextProvider = ({ children }) => {
  const [todolist, dispactchTodoitems] = useReducer(todoitemsReducer, []);

  function AddNewItem(todoname, duedate) {
    console.log(`Todoname: ${todoname}, Duedate:  ${duedate}`)
    const addNewAction = {
      type: "NEW_ITEM",
      payload: {
        todoname,
        duedate
      }
    }

    dispactchTodoitems(addNewAction)
  }

  function DeleteItem(todolistname) {

    const deleteNewAction = {
      type: "DELETE_ITEM",
      payload: {
        todoname: todolistname,
      }
    }
    dispactchTodoitems(deleteNewAction)
  }


  return (
      <TodoItems.Provider value={{
    items: todolist,
    addNewItem: AddNewItem,
    deleteItem: DeleteItem,
    heading: "Task list"
  }}>
    {children}
  </TodoItems.Provider>
  )

}

export default TodoitemsContextProvider;