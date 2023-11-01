import React, { useState,useEffect } from 'react';
import ContentLogin from '../../component/Login/content/Content'
import { AuthContextProvider } from '../../component/context/authcontext';

// const navigate = useNavigate();
function Login() {
    return (
      <div >
        <AuthContextProvider>
        <ContentLogin/>
        </AuthContextProvider>
       
      </div>
      
    )
  }

  
export default Login