import React from 'react'
import Button from "./Button"

const Header = ( ) => {
  return (
    <div className="header">
        {/* inline styling double curly braces*/}
        {/* <h1 style={{color:"red", backgroundColor: "black"}}>Task Tracker</h1> */}
        <h1>Task Tracker</h1>
        <Button />
    </div>
  )
}
// CSS in js


export default Header