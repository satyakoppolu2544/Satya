import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <h3> {props.title} </h3>
        <img src={props.image} alt="" className="cardimage"/>
        <div className="des">
        <p>{props.description}</p>
        <p>{props.Location}</p>
        <p>{props.Gender}</p>
   
        </div>
    </div>
  )
}
