import React from 'react'

const Passing_pros = ({foodItem}) => {
  return (
    <>
    <ul>
      <h4>Passing Pros</h4>
      {foodItem.map((items)=>(
        <li>{items}</li>
      ))}
    </ul>
    </>
  )
}

export default Passing_pros