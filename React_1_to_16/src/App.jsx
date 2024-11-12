import React from 'react'
import Container from './component/Container'

const App = () => {
  return (
    <div style={{
      display:"flex",
      flexWrap:"wrap",
  
    }}>
      <Container></Container>
      <Container></Container>
      <Container></Container>
      <Container></Container>
    </div>
  )
}

export default App