import React, { useRef } from 'react'

const Modal = ({onClose}) => {

  const modalRef = useRef()

  function onCloseModal(e){
    if(modalRef.current === e.target){
      onClose()
    }
  }

  return (
    <div ref={modalRef} onClick={onCloseModal} style={
      {
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter:'blur(4px)',
    
      }
      }>
      <div 
      style={{
        width: "400px",
        height: 180,
        backgroundColor: "indigo",
        color:"white",
        display: 'flex',
        flexDirection:'column',
        padding: "0px 4px",
        textAlign: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        fontFamily: "fantasy"
      }}>
      <button style={
        {

          width:40,
          height: 40,
          fontSize: 36,
          backgroundColor: 'black',
          marginRight:4,
          border: 'none',
          color:'white',
          alignSelf:'flex-end'

        }
        } onClick={onClose}>X</button>
      <h1>This is a kind of error</h1>
      </div>
    </div>
  )
}

export default Modal