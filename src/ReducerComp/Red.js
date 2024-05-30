import React, { useReducer } from 'react'

function reducer(state,action){
if(action.type==="INC"){
    return {count:state.count+1}
}
}

function Red(){
    const[state,dispatch]=useReducer(reducer,{count:0})
    return(
         <div className="border border-2 border-info m-2 p-2">
            <h1>Counter:{state.count}</h1>
            <button onClick={()=>{dispatch({type:"INC"})}}>INCREMENT</button>
         </div>
    )
}
export default Red