import  { React,useState,useContext,  useEffect } from 'react';
import '../../../assets/css/project.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { useAuthContext } from "../../usecontext/useauthcontext";
import axios from "axios";
import { styled } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
function ContentKandidat() {
  const navigate = useNavigate();
  const [code,setCode] = useState()
  const [formValues, setFormValues] = useState({
    kodepengajuan: '',
    nama_kandidat : '',
    nama_manager: '',
    contact_kandidat:'',
    contact_kerabat:'',
    posisi:'',
    nomor_kerabat:'',
    info_job:'',
    nip_ref:'',
    department_refrensi:'',
    nama_refrensi:'',
    jenjang_pendidikan:'',
    Alamat:'',
    pengalaman:'',
    cv:'',
  });
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 1,
    whiteSpace: 'nowrap',
    width: 1,
  });
  useEffect(()=>{
    allmanager()
  },[formValues])
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    setFormValues({
      ...formValues,
      cv: selectedFile, 
    });
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    var {name,value} = event.target;
    setFormValues({
    ...formValues,
    [name]: value,
  });
// console.log("ini value",value)
};

const handleSubmit = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    
  
    const formData = new FormData();
    formData.append("kodepengajuan", formValues.kodepengajuan);
    formData.append("nama_kandidat", formValues.nama_kandidat);
    formData.append("nama_manager", formValues.nama_manager);
    formData.append("contact_kandidat", formValues.contact_kandidat);
    formData.append("contact_kerabat", formValues.contact_kerabat);
    formData.append("posisi", formValues.posisi);
    formData.append("nomor_kerabat", formValues.nomor_kerabat);
    formData.append("info_job", formValues.info_job);
    formData.append("nip_ref", formValues.nip_ref);
    formData.append("department_refrensi", formValues.department_refrensi);
    formData.append("nama_refrensi", formValues.nama_refrensi);
    formData.append("jenjang_pendidikan", formValues.jenjang_pendidikan);
    formData.append("Alamat", formValues.Alamat);
    formData.append("pengalaman", formValues.pengalaman);
    formData.append("cv", formValues.cv);
    console.log("depar ref",formValues.department_refrensi)
    axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "POST",
        url: `http://localhost:8080/kandidat/addformulir`,
        data: formData,
      })
      .then((response) => {
       
          toast.success('berhasil create kandidat', {
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
            setTimeout(() => {
        
              navigate('/dashboard');
          
          }, 4000);
     
      })
      .catch((error) => {
          console.log("err",error.response.data)
  
          if (error.response.status=== 401 && error.response.data.message==="invalid or expired jwt") {
            toast.error("silahkan login terlebih dahulu", {
              position: "top-right",
              autoClose:3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",         
                      
           });
           setTimeout(() => {
           
            localStorage.removeItem('user')
            navigate('/');
        
        }, 4000);
          }else{
            toast.error( error.response.data.data, {
              position: "top-right",
              autoClose:3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",         
                      
           });
      
          }
        
      });
  };

  const allmanager = async() => {
  const roles = "manager";
  const user= JSON.parse(localStorage.getItem("user"))

  // console.log("ini user", user)

    const datapost= {
      kodepengajuan:  formValues.kodepengajuan,
  }
  console.log("code",datapost)
 axios.request({
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    method: "GET",
    url: `http://localhost:8080/submission?code=${datapost.kodepengajuan}`
  }).then(response => {
    // console.log("all manager1",response.data)
  setCode(response.data.data)
  }).catch(err => {
    // Handle error
  });
  
  
  
  }
    return (
      
<>
     <div className='container-kandidat'>
     <ToastContainer />
        <div className='head-kandidat'>
            <h3>Formulir Kandidat</h3>
        </div>
        <div className='content-kandidat'>
        <input
            type="text"
            name="kodepengajuan"
            placeholder="kode pengajuan"
            className="input-kandidat"
            onChange={handleInputChange}
          />
        {code?.map((item) => {
              return (
                <select name='nama_manager'onChange={handleInputChange} >
                <option value='' disabled selected hidden>Nama Manager yang membutuhkan</option>
                 <option value={item.nama_manager} >{item.nama_manager}</option>
               </select>
                
                );    
          })} 
         
          <input
            type="text"
            name="nama_kandidat"
            placeholder="Nama Kandidat"
            className="input-kandidat"
            onChange={handleInputChange}
          />
         

            <input
            type="text"
            name="contact_kandidat"
            placeholder="Your Number"
            className="input-kandidat"
            onChange={handleInputChange}
          />
        
          
          <select name='contact_kerabat' onChange={handleInputChange} >
           <option value='' disabled selected hidden>kontak darurat</option>
            <option value="istri">istri</option>
            <option value="suami">suami</option>
            <option value="orangtua">orangtua</option>
            <option value="saudara">saudari</option>
          </select>

          <select name='posisi' onChange={handleInputChange}>
           <option value='' disabled selected hidden>posisi yang di lamar</option>
            <option value="manager">manager</option>
            <option value="staff">staff</option>
          </select>

          <input
            type="text"
            name="nomor_kerabat"
            placeholder="Kontak darurat"
            className="input-kandidat"
            onChange={handleInputChange}
          />
          <select name='info_job' onChange={handleInputChange} >
           <option value='' disabled selected hidden>Your Information Job</option>
            <option value="jobportal">JobPortal</option>
            <option value="internal">internal</option>
           
          </select>
       
            
            { formValues.info_job === 'internal' ? (
            <>
              <input
                type="text"
                name="department_refrensi"
                placeholder="Departmen Refrence"
                className="input-kandidat"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="nama_refrensi"
                placeholder=" Nama Refrensi"
                className="input-kandidat"
                onChange={handleInputChange}
              />
               <input
               type="text"
               name="nip_ref"
               placeholder=" Nip Refrensi"
               className="input-kandidat"
              onChange={handleInputChange}
              />
            </>
          ) : null}
          <select name='jenjang_pendidikan' onChange={handleInputChange} >
           <option value='' disabled selected hidden>Your Studied</option>
            <option value="SMA">SMA</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
          </select>
          <textarea
              name="Alamat"
              id="komentar"
              cols="30"
              rows="5"
              placeholder="Alamat"
              className="textarea"
              onChange={handleInputChange}
            ></textarea>
            <textarea
              name="pengalaman"
              id="komentar"
              cols="30"
              rows="5"
              placeholder="Pengalaman"
              className="textarea"
              onChange={handleInputChange}
            ></textarea>
             
         <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload Cv Kandidat
          <VisuallyHiddenInput
           type="file"
           name="cv" 
           onChange={handleFileChange}
            />
        </Button>
        <span>{formValues.cv ? formValues.cv.name : ''}</span>
             
        <button
        type="button"
        className="submit-kandidat"
        onClick={handleSubmit}
        >
        Submit
        </button>
        </div>
      
     </div>
   
   
 


    

   
</>
    );
  }
  
  export default ContentKandidat;