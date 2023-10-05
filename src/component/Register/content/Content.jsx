import React, { useState } from 'react';
import '../../../assets/css/project.css';
import Logos from '../../../assets/image/imgregis/par.PNG';
import axios from "axios";
function ContentRegis() {

   
 const [formValues, setFormValues] = useState({
  nip: '',
  password: '',
  nama: '',
  username: '',
  roles: '',
  
});

  
     
     
      const handleInputChange = (event) => {
        event.preventDefault();
        var {name,value} = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
  
  
  
      const handleSubmit = (e)  => {
        e.preventDefault();
        var { nip, password,nama,username,roles } = document.forms[0];
        const datapost= {
          nip: nip.value,
          password:password.value,
          nama:nama.value,
          username:username.value,
          roles:roles.value,
        };
        
        console.log(datapost,"ini data")
       
        axios.post("http://localhost:8080/user/adduser", datapost).then((response) => {
          console.log(response.data.data);
        

        }).catch(error=>{console.log(error)});
      
      };
    return (
      
<>
<div id='container-register'>
    <div className='content' >
    <img className='logo-par' src={Logos}alt="logo" />
    <form className='form-register' onSubmit={handleSubmit} >
    <h1>Register Here</h1>
        <input
            type="text"
            name="nip"
            placeholder="Your NIP"
            className="regist-input"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="regist-input"
            onChange={handleInputChange}
          />
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
           <input
            type="text"
            name="roles"
            placeholder="Your Role"
            className="regist-input"
            onChange={handleInputChange}
          />
          <button className={formValues.roles == "" ||formValues.nip == ""  ||formValues.password==""||
          formValues.username == "" ||formValues.nama ==""? "btn-register-disabled": "btn-register"}>
            Register
          </button>
      </form>
    </div>
</div>
    
</>
    );
  }
  
  export default ContentRegis;


  // function cariangka(params) {
  //   let prom = new Promise((resolve,reject)=>{
  //    setTimeout(()=>{
  //     for (let index = 0; index <= params; index++) {
  //       if (index <= 5){
  //       resolve("ini indeks")
  //       }else{
  //         reject("time out atau tidak di temukan") 
  //       }
   
  //     }
  //    },10000)
  //   })
  //   prom.then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
  // }
