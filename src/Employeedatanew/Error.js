import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Error() {
    const navigate = useNavigate();
  return (
    <div>
        <center><div className="mt-5"> OOPS!!!!! <br/> 404 Not Found 
        </div><button className="mt-5" onClick={()=>{
            navigate("/")
        }}>Go Home</button></center>
        
    </div>
  )
}
