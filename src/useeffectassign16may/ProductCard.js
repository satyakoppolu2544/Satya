import {useContext} from "react";
import Context from "./Context";
import ContextProvider from "./ContextProvider"
function ProductCard(props) {
const values = useContext(Context);
    function handleClick(userName){
        if (values.selectedUsers.find((user) => user === userName)){
            let newusers = values.selectedUsers.filter(
                (user) => user !== userName
            );
            values.setSelectedUsers(newusers);
            return;
        }



    values.setSelectedUsers([...values.selectedUsers,userName])  
   
    }
    let text = "ADD";
    if (values.selectedUsers.find((user) => user === props.title)){
        text = "REMOVE"
    }
    return(
        <div className="card">
            <img alt="" src={props.image} className="image-style"/>
            <p>{props.title}</p>
            <p>{props.rating.rate}</p>
            <p>${props.price}</p>
            <button className="btn-style" onClick={() => handleClick(props.title)}>{text}</button>
        </div>
    )
}

export default ProductCard;