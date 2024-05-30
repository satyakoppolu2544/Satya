import React, {useContext} from 'react'
import Context from "./Context";

export default function Sidebar() {
console.log(Context)
const { state, dispatch } = useContext(Context);

  return (
    <div className="sidebar">
        <h1>Side Bar</h1>
        
      <button onClick = {()=>{
        dispatch({type:"INCREMENT"})
     }}>INCREMENT</button>
     <p>{state.count}</p>
    </div>
  ) 
}
