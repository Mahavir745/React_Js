import React from 'react'

const Container = () => {
  return (
    <div 
    style={
      {border:"1px solid #808080",
      width: "400px",
      height: "400px",
      textAlign: "center",
      borderRadius: "8px",
      overflow:"hidden",
      flexShrink: "0",
      margin:"10px"
      }}>
      <div style={
      {
      width: "400px",
      height: "200px",
      backgroundImage: "linear-gradient(120deg, red,white,pink)"
      }}></div>
      <p><strong>Random Title</strong></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo deleniti perspiciatis mollitia odio porro temporibus ducimus tenetur fuga, hic aperiam repellendus exercitationem nam, voluptas laborum quasi! Odio, sequi accusantium.</p>

      <p><button style={{width: "50%",padding: "10px", border:"none", borderRadius:"8px"}}>Click Here</button></p>
    </div>
  )
}

export default Container