import React from 'react'
import CssModule from './component/CssModule'
import ChildrenContainer from './component/ChildrenContainer'

const App = () => {
  return (
    <>
    <CssModule></CssModule>

    <ChildrenContainer>
    <h1>Children Pass</h1>
    <p>Here I warp this all things in a container</p>
    </ChildrenContainer>
    </>
  )
}

export default App