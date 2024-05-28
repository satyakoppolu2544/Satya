
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';

import React from 'react'
// import Nav from "./components/Nav";
// import SideBar from "./components/SideBar";
//  import Assign from "./asiggnment12may/Assign";
//  import Section from "./asiggnment12may/Section";
//   import EmployeeNav from "./Emp/EmployeeNav";
//   import Seccard from "./Emp/Seccard";
//  import Navf from "./Assign12/Navf";
//   import State from "./Assign14may/State";
//   import { useState } from "react";
//   import Navuse from "./useeffectassign16may/Navuse";
//   import Sec from "./useeffectassign16may/Sec";
//   import ContextProvider from "./useeffectassign16may/ContextProvider";
//   import Products from "./Sunday19may/Products";
    //   import Contact from "./Foodapp/Contact"
    //   import NavFd from "./Foodapp/NavFd";
    //   import Body from "./Foodapp/Body";
   import{createBrowserRouter, Outlet} from 'react-router-dom';
   import Nave from "./Employeedatanew/Nave";
   import EmpBody from "./Employeedatanew/EmpBody";
//    import About from "./Employeedatanew/About";
//    import ContactUs from "./Employeedatanew/ContactUs";

// import BodyRecipe from "./Recipe/BodyRecipe";
// import BodyE from "./Ecommerce/BodyE"
function App(){
    
    return(
    //   <div>
    //     <Nav/>
    //     <div className="direc">
    //     <SideBar />
    //     <SideBar />
    //     </div>
    //     <Nav />
    //   </div>
    // <div>
    //  <Assign/>
    //  <div className="box2">
    //  <Section/>
    //  <Section/>
    //  <Section/>
    //  <Section/>
    //  <Section/>
    //  <Section/>
    //  <Section/>
    //  <Section/>
    //  </div>
    //  <div className="n"> 
    //  <Assign/>
    //  </div>
     
    // </div>
    //   <div>
    //   <EmployeeNav/>
    //   <Seccard/>
    //   </div>
    // <div>
    //     <State/>
    // </div>
    // <ContextProvider>
    // <div>
    //      <Navuse />
    //     <Sec /> 

    // </div>
    // </ContextProvider>
    // <div className="border border-4  border-danger p-2 w-100">
 
    //   <h1> Shopping</h1>
    //   <Products/>
      
    // </div>
    // <div>
    //     <NavFd/>
    //     <Body/>
    // </div>
    <div>
        <Nave/>
        <Outlet/>
        {/* <EmpBody/> */}
    </div>
    // <div>
    // <BodyRecipe/>
    // </div>
    // <div>
    //     <BodyE/>
    // </div>
    );
}
export default App;