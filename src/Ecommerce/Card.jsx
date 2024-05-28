const Card = (props) => {
    return(
    
    <div className="card-style">
     <img src={props.image} alt="" className="img-style"/>
     <p>{props.title}</p>
     <p>{props.price}</p>
     <p>{props.category}</p>
     <button>Add</button>
    </div>
    )
}
export default Card