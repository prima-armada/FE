
import {createContext,useEffect,useReducer } from "react";
import { json } from "react-router-dom";



const ContextAuth = createContext()

export const authreducer =(state,action)=>{

    switch(action.type){
        case 'Login':
            return {user:action.payload}
        case 'Logout':
            return {user:null}    
        default:
            return state
    }
}

const AuthContextProvider = ({children}) => {
    const [state,dispatch]= useReducer(authreducer,{
        user:null
    })


    // console.log("ini state", state)

    useEffect(()=>{
        const user= JSON.parse(localStorage.getItem("user"))

        if (user){
                dispatch({type: 'Login', payload: user})
        }
    },[])

    return(
        <ContextAuth.Provider value ={{...state,dispatch}}>
             {children} 
        </ContextAuth.Provider>
    )
       
    
}
export{ContextAuth,AuthContextProvider }

