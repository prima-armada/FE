import React, { useState } from 'react';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from 'react-modal';
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';

function ContentLupapassword() {
  
  
    return (
      
<>
      <div className='container-forget'>
          <div className='content-forget'>
          <img className='logo-par' src={Logo2}alt="logo" />
          <form className='form-forget'  >
          <img className='prima-logo' src={Logo2}alt="logo" />
            <h3>Form Forget Password</h3>
            <input
            type="text"
            name="nip"
            placeholder="Nip "
            className="input-nip"
            // onChange={handleInputChange}
          />
            <input
            type="text"
            name="password"
            placeholder=" New Password"
            className="input-nip"
            // onChange={handleInputChange}
          />
            <button className="btn-Login">Submit</button>
          </form>
          
          </div>
      </div>
   
   
   

   
</>
    );
  }
  
  export default ContentLupapassword;