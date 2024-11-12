import React from 'react'
import "../App.css"

const ChildrenContainer = (props) => {
  return (
    <div className='childrenContainer'>
      {props.children}
      </div>
  )
}

export default ChildrenContainer