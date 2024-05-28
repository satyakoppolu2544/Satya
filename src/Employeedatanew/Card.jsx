const Card = (props) =>{
    return(
        <div>

            <div className="card">
                <p>{props.name}</p>
                <p>{props.username}</p>
                <p>{props.email}</p>
               
            </div>

        </div>
    )
}

export default Card;