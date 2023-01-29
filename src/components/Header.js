import React from 'react'

const Header = ( ) => {
  return (
    <div>
        {/* inline styling double curly braces*/}
        {/* <h1 style={{color:"red", backgroundColor: "black"}}>Task Tracker</h1> */}
        <h1 style={headingStyle}>Task Tracker</h1>
    </div>
  )
}
// CSS in js
const headingStyle = {
    color:"red",
    backgroundColor: "black"
}

export default Header