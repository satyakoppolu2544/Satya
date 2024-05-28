import React from 'react'
import Card from './Card'
import{useState,useEffect,useRef,useMemo} from 'react'
export default function EmpBody() {

const inputRef = useRef(null);
const [user,setUsers] = useState([])
const[searchText,setSearchText] = useState([])
const[searchdata,setSearch]=useState([])

function search(e){
  setSearchText(e.target.value)
  let filterdata = searchdata.filter((each)=>{
    return each.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
  setUsers(filterdata)
}


let usersearch = useMemo(()=>{
  return user.find((usersearch)=>{
   
    return usersearch.email === "Karley_Dach@jasper.info";
  });
},[user])

useEffect(()=>{
    async function fetchData() {
        console.log("called");
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await data.json();
        setUsers(users) 
        setSearch(users)
      }
      fetchData();
     inputRef.current.focus()
      
},[])



  return (
  
 
<div> 
    <div>

    <input type="text" ref={inputRef} className="mt-5 ml-5" placeholder="search..." value={searchText} onChange={(e)=>{
      search(e)
    }}/>

    <button>Search</button>
   
    {usersearch && <h3>{usersearch.name}</h3>}
    </div>
    <div className="d-flex flex-wrap">
   {
   
user.map((x,index)=>{
   
    return  <Card key={index} name={x.name} username={x.username} email={x.email}/>
})
  
   }
   </div>
   </div>
 
  )

}
