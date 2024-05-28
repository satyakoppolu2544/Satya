import React from 'react'
import Card from "./Card";
import cardsData from "./data";
import {useState} from "react";
export default function Seccard() {
const[searchText, setSearchText] = useState("")
const[cards,setCards] = useState(cardsData)


function change(e) {
  setSearchText(e.target.value)
  if(e.target.value === ""){
  // let filterCards = cardsData.filter((item)=>{
  //   return item.title.toLowerCase().includes(e.target.value.toLowerCase())
  // })
  setCards(cardsData);
}
}
function clickbtn(e){
  
  let filterCards = cardsData.filter((item)=>{
    return item.title.toLowerCase().includes(e.searchText.toLowerCase())
  })
  setCards(filterCards);
}
  return (
    <div>
       <div className="searchWrap">
        <h3 className="head3"> My Cards</h3>
        <div>
            <input type="text" placeholder="search..." value={searchText} onChange = {change}
            
           />
            
           
            
        </div>
        <button  onClick = {clickbtn}>search</button>
        </div>
        <div className= "card-style">
           {cards.map((each) => {
            return <Card title ={each.title} image={each.image} description={"Status : " + each.description} Gender={"Gender : " +each.Gender} Location={"Location : " + each.Location}/> 
           })

           }
        </div>
    </div>
  )
}
