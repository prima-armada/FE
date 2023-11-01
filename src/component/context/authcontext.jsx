
import {createContext,useReducer } from "react";



const ContextAuth = createContext()

export const authreducer =(state,action)=>{
    switch(action.type){
        case 'Login':
            return {user:action.payload}
        default:
            return state
    }
}

const AuthContextProvider = ({children}) => {
    const [state,dispatch]= useReducer(authreducer,{
        user:null
    })


    console.log("autcontext Provider", state)



    return(
        <ContextAuth.Provider value ={{...state,dispatch}}>
             {children} 
        </ContextAuth.Provider>
    )
       
    
}
export{ContextAuth,AuthContextProvider }

