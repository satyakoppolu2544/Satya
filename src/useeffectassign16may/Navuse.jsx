import React, {useContext} from 'react';
import Context from "./Context";
export default function Navuse(props) {
  console.log(props.selectedUsers) 
  const values = useContext(Context);
  return (
    <div className="NavStyle">
        <img alt ="" src="https://img.freepik.com/free-vector/box-silhouette-logo_361591-2400.jpg" className="logoStyle"/>
    <ul>
        
        <li>Home</li>
        <li>Services</li>
        <li>ContactUs</li>
        <li>AboutUs</li>
        <li>Returns & Orders</li>
    </ul>
    <div className="cartStyle">
        <span className="cart-in">{values.selectedUsers.length}</span>
       
      </div>
    </div>
  )
}
