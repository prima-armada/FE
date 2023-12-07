

import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

import axios from "axios";
import { useAuthContext } from "../usecontext/useauthcontext";


export const UseLogin=()=>{

    const {dispatch} = useAuthContext()
    
    const navigate = useNavigate();
    
    const login= async(value)=>{
        
        
     await axios.post("http://localhost:8080/login",value).then((response) => {
      
      
         
      if(response.data.status ==="OK"){
        toast.success('Login Success', {
          position: "top-right",
          autoClose: 3000,
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
         navigate('/dashboard');
      } 
      
      }).catch(error=>{
        
        if(error){
          // console.log("ini error",error.response.status)
            toast.error( error.response.data.data, {
                position: "top-right",
                autoClose:3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",         
                        
             })
    
        }
        
        navigate('/');
    }
  );
}
  return {login}
}