import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/regis/Register'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';


const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/> ,
  },
  {
    path: "/",
    element: <Login/> ,
  },
 
  {
    path: "/dashboard",
    element: <Dashboard/> ,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

