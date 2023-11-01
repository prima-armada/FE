import { useContext } from "react"
import { ContextAuth } from "../context/authcontext"

export const useAuthContext=()=>{
    const context = useContext(ContextAuth)

    console.log("ini usecontext", context)
  

    if (!context){
        throw Error("authcontext must be used inside an authcontexporvider")
    }
    return context
}