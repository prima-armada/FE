import React, { useState } from 'react';
import '../../../assets/css/project.css';
import {ToastContainer } from "react-toastify";
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';
import { UseLogin } from '../../hook/customhook';
function ContentLogin() {
  const [formValues, setFormValues] = useState({
    nip: '',
    password: '',
  });
  const {login} = UseLogin()
  const handleInputChange = (event) => {
    event.preventDefault();
    var {name,value} = event.target;
    setFormValues({
    ...formValues,
    [name]: value,
  });

};

const handleSubmit = async (e)  => {
  e.preventDefault();
  
  var { nip, password } = document.forms[0];
  const datapost= {
  nip: nip.value,
  password:password.value,
 
}
await login(datapost)

};
  return (
      
<>
<div id='container-login'>
    <div className='content-login' >
    <img className='logo-par' src={Logo2}alt="logo" />
    <ToastContainer/>
    <form className='form-login'onSubmit={handleSubmit} >
         <img className='prima-logo' src={Logo2}alt="logo" />
    <h1>Login Here</h1>
         <input
            type="text"
            name="nip"
            placeholder="Your Nip"
            className="login-input"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="login-input"
            onChange={handleInputChange}
          />
          <button className="btn-Login">Login</button>
          
      </form>
    </div>
</div>
    
</>
    );
  }
  
  export default ContentLogin;