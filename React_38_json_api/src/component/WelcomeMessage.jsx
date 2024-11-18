import React from 'react'

const WelcomeMessage = ({HandlefetchBtn}) => {
  return (
    <center>
      <h1 className='mt-3'>There are no any post.</h1>
      <button className='btn btn-dark' onClick={HandlefetchBtn}>Fetch data from server</button>
      </center>
  )
}

export default WelcomeMessage