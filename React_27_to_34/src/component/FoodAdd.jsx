import React, { useRef } from 'react'

const FoodAdd = ({todoinfo}) => {


  const todonameElement = useRef();
  const duedateElement = useRef();


  function Addbtn(e){
    e.preventDefault();
    const todoname = todonameElement.current.value
    const duedate = duedateElement.current.value
    todonameElement.current.value = ""
    duedateElement.current.value = ""
    todoinfo(todoname,duedate);

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