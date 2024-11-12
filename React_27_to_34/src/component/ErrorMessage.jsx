import React from 'react'

const ErrorMessage = ({foodlist}) => {
  return (
    <>
      {foodlist.length === 0 && <h1 style={{textAlign:"center"}}>All tasks has been done.</h1>}
    </>
  )
}

export default ErrorMessage