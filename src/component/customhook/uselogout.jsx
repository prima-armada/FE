
import { useAuthContext } from "../usecontext/useauthcontext"
import { useNavigate } from 'react-router-dom'
export const useLogout=()=>{
    const { dispatch }= useAuthContext()
    const navigate = useNavigate();

    const logout=()=>{
      
        setTimeout(() => {
            localStorage.removeItem('user')

            dispatch({type: 'Logout' })
            navigate('/');
        
        }, 4000);
      
    }
    return {logout}
}