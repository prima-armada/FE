import React, { useState,useRef } from 'react';
import '../../../assets/css/project.css';
import Logos from '../../../assets/image/imgregis/logo-prima.png';
import { InputGroup, InputRightElement,Input} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
function isNumber(str) {
  if (str.trim() === '') {
    return false;
  }

  return !isNaN(str);
}

function ContentRegis() {
  const [show, setShow] = useState(false);

  const[record,setRecord]= useState({})
 const [formValues, setFormValues] = useState({
  nip: '',
  password: '',
  nama: '',
  username: '',
  roles: '',
  bagian: '',
  
});

const showPassword = () => setShow(!show);
     
const onShowPassword = (e) => {
setFormValues(e.target.value);
};
const handleInputChange = (event) => {
    event.preventDefault();
    var {name,value} = event.target;
    setFormValues({
    ...formValues,
    [name]: value,
  });
};
  
// const navigate = useNavigate();

const handleSubmit = async (e)  => {
      e.preventDefault();
      
      var { nip, password,nama,username,roles,bagian } = document.forms[0];
      const datapost= {
      nip: nip.value,
      password:password.value,
      nama:nama.value,
      username:username.value,
      roles:roles.value,
      bagian: bagian.value,
    };
    const apiUrl = process.env.REACT_REGISTER_API_BASE_URL;

    
     await axios.post('http://localhost:8080/user/adduser', datapost).then((response) => {
      // console.log("ini respon",response.data.status)
    if(response.data.status ==="Created"){
      toast.success('Register Success', {
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
        nip.value = ""
        username.value =""
        password.value = ""
        roles.value = ""
        bagian.value = ""
        nama.value = ""
      
    } 
    
    }).catch(error=>{
      console.log("ini error",error.response.data.data)
      if(
      datapost.nama === ""|| datapost.bagian === "" || datapost.nip === "" 
      ||datapost.password ===""
      ||datapost.roles ===""||datapost.username ===""
      )
      {
 
      toast.error('Register fail, Harap Isi Kolom Yang Kosong', {
          position: "top-right",
          autoClose:1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
       
      }else if (Object.keys(datapost.nama).length<5||Object.keys(datapost.password).length<5||
      Object.keys(datapost.roles).length<5||Object.keys(datapost.bagian).length<5
      ||Object.keys(datapost.username).length<5||Object.keys(datapost.nip).length<5){

        toast.warning('Register fail, Harap input minimal 5 karakter', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }else if(Object.keys(datapost.nama).length>15||Object.keys(datapost.password).length>15||
      Object.keys(datapost.roles).length>15||Object.keys(datapost.bagian).length>15
      ||Object.keys(datapost.username).length>15||Object.keys(datapost.nip).length>15){

        toast.warning('Register fail, Harap input maksimal 15 karakter', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }
  
        else{
          toast.error('Register fail, anda sudah terdaftar', {
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
      
  }
);
      

        
};
  return (
      
<>
<div id='container-register'>
    <div className='content' >
    <img className='logo-par' src={Logos}alt="logo" />
    <ToastContainer />
    <form className='form-register' onSubmit={handleSubmit} >
    
      
    <h1>Register Here</h1>
        <input
            type="text"
            name="nip"
            pattern="[0-9]*"
            placeholder="Your NIP"
            className="regist-input"
            onChange={handleInputChange}

          />
           <input
            type="text"
            name="bagian"
            pattern="[a-z]*"
            placeholder="Your bagian"
            className="regist-input"
            onChange={handleInputChange}
       
          />
          <InputGroup className="inputgrup" >
             <Input
              type={show ? 'text' : 'password'}
              name="password"
              placeholder="Your Password"
              className="regist-input"
              onChange={handleInputChange}
              onInput={onShowPassword}
          
              />
           {formValues.password&& <InputRightElement className= "righinput">{show ? <ViewOffIcon onClick={showPassword} cursor={'pointer'} /> : <ViewIcon onClick={showPassword} cursor={'pointer'} />}</InputRightElement>}
          </InputGroup>
        
            <input
            type="text"
            name="nama"
            placeholder="Your Name"
            className="regist-input"
            onChange={handleInputChange}
          
          />
           <input
            type="text"
            name="username"
            placeholder="Your Username"
            className="regist-input"
            onChange={handleInputChange}
        
          />
           <select name='roles' onChange={handleInputChange}>
           <option   value='' disabled selected hidden>Your Roles</option>
            <option value="manager">manager</option>
            <option value="admin">admin</option>
            </select>
          <button className={formValues.roles === "" ||formValues.nip === ""  ||formValues.password===""||
          formValues.username === "" ||formValues.nama ===""? "btn-register-disabled": "btn-register"}>
            Register
          </button>
      </form>
    </div>
</div>
    
</>
    );
  }
  
  export default ContentRegis;


