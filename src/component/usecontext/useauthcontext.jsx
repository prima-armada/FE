import { useContext } from "react"
import { ContextAuth } from "../context/authcontext"

export const useAuthContext=()=>{
    const context = useContext(ContextAuth)

  
  

    if (!context){
        throw Error("authcontext must be used inside an authcontexporvider")
    }
    return context
}