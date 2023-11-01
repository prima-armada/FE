
import { useAuthContext } from "./useauthcontext";
import { toast } from "react-toastify";

import axios from "axios";


export const UseLogin=()=>{

    const {dispatch} = useAuthContext()
    
    

    const login= async(value)=>{
        
        
     await axios.post("http://localhost:8080/login",value).then((response) => {
      
      
         
      if(response.data.status ==="OK"){
        toast.success('Login Success', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className : 'toas-success',
          theme: "green",
          
          })
       
          const data =  response.data.data
    
          localStorage.setItem('user',JSON.stringify(data))
         dispatch({type:'Login', payload: data})
      } 
      
      }).catch(error=>{
        
        if(error){
            toast.error( error.response.data.data, {
                position: "top-right",
                autoClose:1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",         
                        
             })
        }
        
    }
  );
}
  return {login}
}