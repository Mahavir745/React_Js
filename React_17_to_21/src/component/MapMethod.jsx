import React from 'react'
import "../App.css"

const MapMethod = () => {
  const foodItems = ["milk","vegetables","fruits","dry fruits"]
  return (
    <>
    <ul>
    <h4>Use of map method: </h4>
      {foodItems.map((ele,i)=>(
        <li key={i}>{ele}</li>
      ))}
    </ul>
    </>
  )
}

export default MapMethod