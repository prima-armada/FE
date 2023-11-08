import { useContext } from "react"
import { DepartProvider, DepartementContext } from "../context/Contextprovid"


export const useDepartcontext = ()=>{
    const context = useContext(DepartementContext)

    if(!context){
        throw Error("usecontext tidak pada tempatnya");
    }

    return context
}