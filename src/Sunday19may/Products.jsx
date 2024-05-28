import Cart from "./Cart"
import {useEffect,useState} from "react"
function Products(){
const [products,setProducts] = useState([])
const [cart,setCart] = useState([])
    useEffect(()=>{
       getData()
    },[])
     async function getData(){
        let fetchdata = await fetch("https://fakestoreapi.com/products");
        let res = await fetchdata.json()
        setProducts(res)
    }
    function addToCart(product){
     setCart([...cart,{...product,count:0}])
    }
    function isProductInCart(product){
        let x = cart.find(function(cp){
            if(cp.title===product.title){
                return true
            }
            else{
                return false
            }
            
        })
        return x
    }
    function increment(product){
     let temp = cart.map((cp)=>{
        if(cp.title===product.title){
            cp.count = cp.count + 1
        }
        return cp
     })
     setCart([...temp])
    }
    function decrement(product){
        let temp = cart.map((cp)=>{
            if(cp.title===product.title){
                cp.count = cp.count - 1
            }
            return cp
         })
         setCart([...temp])
    }
    return (
   <div className=" d-flex flex-wrap border border-4 border-info p-2 w-100">
    <div className="w-50">
   
    
       {products.length>0 && (
       products.map((product)=>{
            return  <li className="d-flex">
                <img src={product.image} alt="" width="100px"/>
                <div className="p-2">
                    <h4>{product.title}</h4>
                    <h1>{product.price}</h1>
                    {
                        isProductInCart(product) && 
                       
                       <>
                       <button onClick={()=>{decrement(product)}}>-</button>
                       <button onClick={()=>{increment(product)}}>+</button>
                       
                       </>
                    }
                    {
                        !isProductInCart(product) && (
                    <button onClick={()=>{addToCart(product)}}>Add to Cart</button>)
                     } 
                </div>
                </li>
        })
    )}
    </div>
    <div className="w-50">
    <Cart cart={cart}></Cart>
    </div>
   </div>
    )
}
export default Products