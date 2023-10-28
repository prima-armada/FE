import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/regis/Register'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Detail from './pages/detail/detail';
import Department from './pages/department/department';
import Pengajuan from './pages/pengajuan/detail';
import Kandidat from './pages/kandidat/kandidat';
import Lupapassword from './pages/lupapassword/lupapassword';
import SoalInterview from './pages/soal/soal';
import Interview from './pages/interview/interview';
import InterviewKandidat from './pages/interviewkandidat/interviewkandidat';


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
  {
    path: "/detail",
    element: <Detail/> ,
  },
  {
    path: "/department",
    element: <Department/> ,
  },
  
  {
    path: "/pengajuan",
    element: <Pengajuan/> ,
  },
  {
    path: "/kandidat",
    element: <Kandidat/> ,
  },
  {
    path: "/forget",
    element: <Lupapassword/> ,
  },
  {
    path: "/soalinterview",
    element: <SoalInterview/> ,
  },
  {
    path: "/interview",
    element: <Interview/> ,
  },
  {
    path: "/interviewkandidat",
    element: <InterviewKandidat/> ,
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

