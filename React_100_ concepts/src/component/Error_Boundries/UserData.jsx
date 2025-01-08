import React from 'react'

const UserData = () => {

  if(true){
    throw new Error("This is an error User Data")
  }
  return (
    <div>
      User Data
    </div>
  )
}

export default UserData