import React from 'react';
import '../../../assets/css/project.css';
import Logos from '../../../assets/image/imgregis/par.PNG';

function ContentRegis() {
    return (
      
<>
<div id='container-register'>
    <div className='content' >
    <img className='logo-par' src={Logos}alt="logo" />
    <form className='form-register' >
    <h1>Register Here</h1>
        <input
            type="text"
            name="email"
            placeholder="Id Pegawai"
            className="regist-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="regist-input"
          />
            <input
            type="password"
            name="password"
            placeholder="Your Name"
            className="regist-input"
          />
           <input
            type="password"
            name="password"
            placeholder="Password"
            className="regist-input"
          />
           <input
            type="password"
            name="password"
            placeholder="Password"
            className="regist-input"
          />
          <button className="btn-register">Register</button>
      </form>
    </div>
</div>
    
</>
    );
  }
  
  export default ContentRegis;