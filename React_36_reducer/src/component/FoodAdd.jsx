import React, { useContext, useRef } from 'react'
import { TodoItems } from '../store/todo_items_store';

const FoodAdd = () => {

  const {addNewItem} = useContext(TodoItems)

  const todonameElement = useRef();
  const duedateElement = useRef();


  function Addbtn(e){
    e.preventDefault();
    const todoname = todonameElement.current.value
    const duedate = duedateElement.current.value
    todonameElement.current.value = ""
    duedateElement.current.value = ""
    addNewItem(todoname,duedate);

  };

  return (
    <form className='foodAdd'
    onSubmit={Addbtn}>
      <input type="text"
       placeholder='add a item'
       ref={todonameElement}
       />
      <input type="date"  
      ref={duedateElement}
      />
      <button 
      >Add</button>
    </form>


  )
}

export default FoodAdd