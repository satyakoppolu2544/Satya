import{Link } from 'react-router-dom';
import Context from './Context';
import { useContext } from "react";

const Nave = () => {
const values = useContext(Context) 

console.log(values)
    return(
       <div className="nav-s">
    <ul>
       <li><Link to="/">Home </Link></li>
       <li><Link to="/about">About Us </Link></li>
       <li> <Link to="/contact">Contact Us</Link></li>
    </ul>
    
</div>
       
    )
}
export default Nave