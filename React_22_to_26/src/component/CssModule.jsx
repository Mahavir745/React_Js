import React from 'react'
import style from './CssModule.module.css'

const CssModule = () => {
  return (
    <>
    <div className = {style["container"]}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea expedita consequuntur atque.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem, ipsum.</p>
    </div>
    </>
  )
}

export default CssModule