import React from 'react'
import Card from './Card'
import { useEffect, useState } from "react";
export default function BodyE() {
const[products, searchProducts] = useState([])
const[search,setSearch] = useState([])
const[data, setData]= useState([])



function handlechange(e){
    setSearch(e.target.value)
    let myitem = data.filter((each)=>{
        return each.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    searchProducts(myitem)
}

useEffect(
  () =>{
  getProducts()
},[])

async function getProducts(){
    let data = await fetch("https://fakestoreapi.com/products")
    let res = await data.json()
    
    searchProducts(res)
    setData(res)
    console.log(res)
}
if(products.length === 0){
    return (<h1>Fetching data....</h1>)
}
  return (
    <div>
        <h1 className="m-4 p-4">Product List</h1>
        <div className="d-flex justify-content-center mb-5">
            <input type="text" placeholder="search...." value={search} onChange={(e)=>{
                handlechange(e)
            }}/>
            <button className="ml-5">Search</button>
        </div>
        <div className="d-flex flex-wrap">
        {products.map((product)=>{
           return  <Card title={product.title} image = {product.image} price={product.price} category={product.category}/>
          
        })}
        </div>
    </div>
  )
}
