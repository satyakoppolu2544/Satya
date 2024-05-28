import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmpBody from './Employeedatanew/EmpBody'
import About from "./Employeedatanew/About";
import ContactUs from "./Employeedatanew/ContactUs";
// import Menu from "./Foodapp/Menu";
import{createBrowserRouter, RouterProvider} from 'react-router-dom';


// root.render(

// <App />

    
//     );
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
       
        
        children: [
             {
                path: "/",
                element: <EmpBody/>,
             },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            // {
            //     path: "/restaurants/:resId",
            //     element: <Menu />,
            // }
           

        ],
     
    
    }
    

])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
