

import Cookies from "js-cookie";
import { useState,createContext,useEffect,useReducer } from "react";



const DepartementContext = createContext(null)

const departreduce = (state, action)=>{
  switch(action.type){
    case 'setdepartement' : 
    return{
      department: action.payload
    }
    case 'createdepartement' : 
    return{
      department: [action.payload,...state.department]
    }
  }
}
const DepartProvider = ({children}) => {
    const[state, dispatch] = useReducer(departreduce,{
      department: null
    })

      console.log("departemn contex", state)
   
    return(
        <DepartementContext.Provider value ={{...state,dispatch}}>
             {children} 
        </DepartementContext.Provider>
    )
       
    
}
export{DepartementContext,DepartProvider}

// const [data,SetData] = useState()
//