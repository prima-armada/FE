
import axios from "axios";
import Cookies from "js-cookie";
import { useState,createContext,useEffect } from "react";



const Context = createContext(null)


const DepartProvider = ({children}) => {

    const [data,SetData] = useState()
    const GetDepartment = async() => {
    const parsing= JSON.parse(localStorage.getItem("user"))

    console.log("get token bos",parsing.token)

       axios.request({
            headers: {
              Authorization: `Bearer ${parsing.token}`
            },
            method: "GET",
            url: "http://localhost:8080/department"
          }).then(response => {
            SetData(response.data.data)
         
          }); 
            
      }
      useEffect(() => {
       GetDepartment();
      }, []);
    //   console.log("ini data",data);
    return(
        <Context.Provider value ={{data}}>
             {children} 
        </Context.Provider>
    )
       
    
}
export{Context,DepartProvider}

