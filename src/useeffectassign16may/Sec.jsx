import React from 'react'
import ProductCard from "./ProductCard";

import {useEffect, useState} from 'react'

export default function Sec(props) {
    
  const [products, updateProducts] = useState([])

  const[searchText,setSearchText] = useState("")



  useEffect(()=>{getProducts()},[])

  async function getProducts(){

      let res = await fetch("https://fakestoreapi.com/products")
      console.log(res)
      let productList = await res.json();
      updateProducts(productList)
      }
    
    function clickbtn(e){
      let data = products.filter((res) => {
        return res.title.toLowerCase().includes(searchText.toLowerCase())
      })
      updateProducts(data);
    }
return (
 
  

  <div>
    
    <div className="tbtn">
      <input type="text" value={searchText} onChange ={(e)=>{
        setSearchText(e.target.value)
        if(e.target.value === ""){
          let data = products.filter((res) => {
          return res.title.toLowerCase().includes(e.target.value.toLowerCase())
          })
          getProducts(data);
        }
      }}/>
      <buttton className="button" onClick = {clickbtn}> Search</buttton>
    
    </div>
     <div className="product-list">
    {
      products.map((p,index)=>
          <ProductCard key = {index} title={p.title} price={p.price} image={p.image} rating={p.rating} />)
         
      }
    
    </div>
  </div>
)
}