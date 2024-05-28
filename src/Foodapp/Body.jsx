import React from 'react'
import RestCard from './RestCard';
import {useState,useEffect} from 'react';
// import resObj from './Data';
import {Link} from 'react-router-dom';
export default function Body() {

const[list, setList] = useState([])
const[searchText, setSearchText] = useState("")
const[filterRestro,setFilterRestro] = useState([])
useEffect(()=>{
  fetchData();
},[])

const fetchData = async () =>{
  let fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4035453&lng=78.47874639999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  let res = await fetchdata.json();
  // console.log(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  setList(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  setFilterRestro(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}

  return (
    <div className="body">
      <div className= "bodycontainer">
      <div className="search">
        <input type="text" className="searchbox" value={searchText} onChange={(e)=>{
         
          setSearchText(e.target.value)
        }}/>
        <button onClick ={()=>{
          const filterRestro = list.filter((each)=>each.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilterRestro(filterRestro)
        }}>Search</button>
      </div>
        <div className = "filter">
          <button className="filter-btn" onClick={()=>{
              const filterList = list.filter((restro)=>
                restro.info.avgRating === 4.3 
              );
              console.log(filterList)
              setList(filterList);
          }}
          
          >Top Rated Hotels</button>
        </div>
        </div>
        <div className="res-container">
        
        {filterRestro.map((item)=> (
        <Link key={item.info.id} to={"/restaurants/"+item.info.id}><RestCard key={item.id} resData={item.info}/></Link>))}
        
        
        </div>
        </div>
    
  )
}
