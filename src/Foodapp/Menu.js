import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
const x = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4035453&lng=78.47874639999999&restaurantId=";
const Menu = () =>{
  const[resInfo, setResInfo] = useState(null)
  const {resId} = useParams()
  console.log(resId)

    useEffect (()=>{
      fetchMenu();
    },[])
  
    

    const fetchMenu = async () => {
        
        const data = await fetch(x+resId);
        console.log((x+resId))
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
        
    }
  
// const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info?.name;
//  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    return(
        <div className="menu">
        <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        <h1>{resInfo?.cards[2]?.card?.card?.info?.id}</h1>
          <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
          <h4>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h4>
          <h2 className="mt-5 ml-5">Menu</h2>
          <ul>
            {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - {(item.card.info.price)}</li>)}
          
          </ul>
        </div>
    )
}

export default Menu