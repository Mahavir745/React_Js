import React from 'react'
import "../App.css"


const Conditional = () => {
  // const foodItems = ["milk","vegetables","fruits","dry fruits"]
  const foodItems = []
  return (
    <>
    <ul>
    <h4>Conditional Statement: </h4>
      {foodItems.length == 0 && <h4>Your list is empty</h4>}
      {foodItems.map((ele,i)=>(
        <li key={i}>{ele}</li>
      ))}
    </ul>
    </>
  )
}

export default Conditional