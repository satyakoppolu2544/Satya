import React, {useState} from 'react'

export default function State() {
  
const[showText, setShowText] = useState("black");



  return (
  <div>
    <button onClick = { () =>{
      setShowText(showText === "black" ? "red" : "black");
    }}> Show/Hide</button>

     <h1 style={{color:showText}}>Hi my name is satya</h1>
  </div>
  )
}
