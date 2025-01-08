import React, { useState } from 'react'
import UserData from './component/Error_Boundries/UserData'
import ErrorBoundries from './component/Error_Boundries/ErrorBoundries'
import Random from './component/Error_Boundries/Random'
import Modal from './component/Pop_up_dailogBox/Modal'
import Message from './component/Pop_up_dailogBox/Message'

const App = () => {

  const [popup,setPopup] = useState(false)

  return (
    <>
    <ErrorBoundries>
      <UserData/>
    </ErrorBoundries>
    <Random/>

    <Message  OnChoose={()=> setPopup(true)}/>
    {popup && <Modal onClose = {()=> setPopup(false)}/>}
    </>
  )
}

export default App