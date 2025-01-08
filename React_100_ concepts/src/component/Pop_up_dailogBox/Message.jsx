import React from 'react'

const Message = ({OnChoose}) => {
  
  return (
    <center>
      <h1>This is a random message</h1>
    <button onClick={OnChoose} style={{padding:8, width: 120, backgroundColor:"indigo",color: 'white'}}>Click Here</button>
    </center>
  )
}

export default Message