import React from 'react'
import { useParams } from 'react-router-dom'
export default function Details() {
    const param = useParams();
    console.log(param)
  return (
    <div>
     <h1> Hi {param.name} <br/>
     </h1>

    </div>
  )
}
