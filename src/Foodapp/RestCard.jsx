import React from 'react'
export default function RestCard(props) {
    const {resData} = props
    const {
      cloudinaryImageId,
      cuisines,
      name,
      avgRating,
      locality
     
    } = resData;
  return (
    <div className="res-card">
     <img className="card-img" alt="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
     cloudinaryImageId}/>
     <h3>{name}</h3>
     <h5>{cuisines.join(", ")}</h5>
     <h5>{avgRating}</h5>
     
     <h9>{locality}</h9>

    </div>
  )
}
