import React from "react";
import { createContext, useState } from "react";
import Context from './Context';
import { useReducer } from "react";
import{initialState,reducer} from "./Store"
export default function ContextProvider(props){
    // const Context = createContext();
    // const [selectedUser,SetSelectedUser] = useState([])
    const[state,dispatch] = useReducer(reducer, initialState)
    return <Context.Provider values = {{
        state,dispatch,
        // selectedUser,
        // SetSelectedUser
       
    }}>
        {props.children}
    </Context.Provider>
}