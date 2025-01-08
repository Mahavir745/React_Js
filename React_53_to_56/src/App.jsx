import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToggleMessage from './component/ToggleMessage';

const App = () => {
  const counter = useSelector((store) => store.counter)
  const privacy = useSelector((store)=> store.privacy);

  const dispatched = useDispatch();

  const numberElement = useRef()

  const HandleIncrement = () => {
    dispatched({
      type: 'INCREMENT'
    })
  }

  const HandleDecrement = () => {
    dispatched({
      type: "DECREMENT"
    })
  }

  const HandleAdd = () => {
    dispatched({
      type: 'ADD',
      payload: numberElement.current.value
    })
    numberElement.current.value = " "
  }

  const HandleSub = () => {
    dispatched({
      type: "SUB",
      payload: numberElement.current.value
    })
    numberElement.current.value = " "
  }

  const HandleToggle = ()=>{
    dispatched({
      type:"TOGGLE"
    })
  }

  return (
    <center style={{
      margin: "400px"
    }}>
      <h2>Counter</h2>
     { privacy ? <ToggleMessage/> : <div>Counter value is: {counter}</div>}
      <button onClick={HandleDecrement}>-1</button>
      <button onClick={HandleIncrement}>+1</button>
      <button onClick={HandleToggle}>Make it Private</button>
      <div style={{
        display: 'flex',
        width: "400px",
        justifyContent: "space-evenly",
        marginTop: "8px"
      }}>
        <input type="number" placeholder='Number' style={{
          textAlign: "center",
          width: "100px"

        }}
        ref={numberElement}
        />
        <button onClick={HandleAdd}>Add</button>
        <button onClick={HandleSub}>Sub</button>
      </div>
    </center>
  )
}

export default App