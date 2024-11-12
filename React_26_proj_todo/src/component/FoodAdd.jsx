import React, { useState } from 'react'

const FoodAdd = ({todoinfo}) => {

  let [todoname,setTodoname] = useState("")
  let [duedate,setDuedate] = useState("")


  function HandleItem(e){
    setTodoname(e.target.value);
  };

  function HandleAddBtn(e){
    setDuedate(e.target.value);

  };

  function Addbtn(){
    todoinfo(todoname,duedate);
  };

  return (
    <div className='foodAdd'>
      <input type="text"
       placeholder='add a item'
       onChange={HandleItem}
       value={todoname}
       />
      <input type="date"  
      onChange={HandleAddBtn}
      value={duedate}
      />
      <button onClick={Addbtn}>Add</button>
    </div>

  )
}

export default FoodAdd