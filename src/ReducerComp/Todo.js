import React, {useReducer} from 'react'

function reducer(state,action){
if(action.type==="ADDTODO"){
 
  return{
    todos:[...state.todos,state.newtodo],
    newtodo:''
  }
}
if(action.type==='UPDATENEWTODO'){
    return{
        ...state,
        newtodo:action.payload
    }
}
}
function TodolistR() {
    const [state,dispatch] = useReducer(reducer,{
        todos:['Moksha Fee', 'House', 'get Bmw'],
        newtodo:''
    })
    return(
        <div>
            <h1>Todolist</h1>
            <input type="text" className="form-control" id='d1' value={state.newtodo} onChange={(e)=>{dispatch({type:"UPDATENEWTODO",payload:e.target.value})}}/>
            <button className='btn btn-success' onClick={()=>{dispatch({type:"ADDTODO"})}}>Add Todo</button>
            <u>
                {
                    state.todos.map((todo)=>{
                        return<li>{todo}</li>
                    })
                }
            </u>
        </div>
    )
}
export default TodolistR