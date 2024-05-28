import {useState} from 'react'
const BodyRecipe = () => {
    const[search, setSearch] = useState([]);
    const submitHandler = e =>{
        e.preventDefault();
        fetch("");
    }
    return(
        <div>
            <center>
          
            <h4>Food Recipe App</h4>
            <form onSubmit={submitHandler}>
                <input type = "text" value={search} onChange={(e)=> setSearch(e.target.value)}/><br/>
                <input type ="submit" value="search"/>
            </form>
            </center>
        </div>
    )
}
export default BodyRecipe;