import React from 'react'

const Todolist = ({todoname,tododate,onDeleteClick}) => {

  return (
    <div className='listContainer'>
      <div className='foodItem'>
        <div>{todoname}</div>
        <div>{tododate}</div>
        <div>
        <button onClick={()=>onDeleteClick(todoname)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todolist