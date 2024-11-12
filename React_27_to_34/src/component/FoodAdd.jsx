import React, { useState, useRef } from 'react'

const FoodAdd = ({todoinfo}) => {

  let [todoname,setTodoname] = useState("")
  let [duedate,setDuedate] = useState("")


  function HandleItem(e){
    setTodoname(e.target.value);
  };

  function HandleAddBtn(e){
    setDuedate(e.target.value);

  };

  function Addbtn(e){
    e.preventDefault();
    todoinfo(todoname,duedate);
    setDuedate("")
    setTodoname("")
  };

  return (
    <form className='foodAdd'
    onSubmit={Addbtn}>
      <input type="text"
       placeholder='add a item'
       onChange={HandleItem}
       value={todoname}
       />
      <input type="date"  
      onChange={HandleAddBtn}
      value={duedate}
      />
      <button 
      >Add</button>
    </form>


  )
}

export default FoodAdd