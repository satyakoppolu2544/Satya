import{Link} from 'react-router-dom';

const Nave = () => {
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