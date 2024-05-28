import React from 'react'

export default function EmployeeNav() {
  return (
    <div className="navbar">
      <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" alt="" className="logo"/>
        <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
        </ul>
        {/* <div className='search-box'>
          <input type="text" placeholder="search"/>
          

        </div>
         */}
    </div>
  )
}
