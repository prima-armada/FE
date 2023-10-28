import React, { useState } from 'react';
import '../../../assets/css/project.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
function ContentKandidat() {
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
    return (
      
<>
     <div className='container-kandidat'>
        <div className='head-kandidat'>
            <h3>Formulir Kandidat</h3>
        </div>
        <div className='content-kandidat'>
          <input
            type="text"
            name="nama"
            placeholder="Nama Kandidat"
            className="input-kandidat"
            // onChange={handleInputChange}
          />
         

            <input
            type="text"
            name="kandidat_kontak"
            placeholder="Your Number"
            className="input-kandidat"
            // onChange={handleInputChange}
          />
        
          
          <select name='kontak_darurat' >
           <option value='' disabled selected hidden>kontak darurat</option>
            <option value="istri">istri</option>
            <option value="suami">suami</option>
            <option value="orangtua">orangtua</option>
            <option value="saudara">saudari</option>
          </select>
          <input
            type="text"
            name="kontak_darurat"
            placeholder="Kontak darurat"
            className="input-kandidat"
            // onChange={handleInputChange}
          />
          <select name='informasi_job' >
           <option value='' disabled selected hidden>Your Information Job</option>
            <option value="jobportal">JobPortal</option>
            <option value="internal">internal</option>
           
          </select>
          <input
            type="text"
            name="refrensi"
            placeholder=" Nip Refrensi"
            className="input-kandidat"
            // onChange={handleInputChange}
          />
            
            <input
            type="text"
            name="department"
            placeholder="Departmen Refrence"
            className="input-kandidat"
            // onChange={handleInputChange}
          />
           <input
            type="text"
            name="nama_refrence"
            placeholder=" Nama Refrensi"
            className="input-kandidat"
            // onChange={handleInputChange}
          />
          <select name='Pendidikan' >
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
            ></textarea>
            <textarea
              name="pengalaman"
              id="komentar"
              cols="30"
              rows="5"
              placeholder="Pengalaman"
              className="textarea"
            ></textarea>
             
             <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload Cv Kandidat
              <VisuallyHiddenInput type="file" />
            </Button>
            
             
              <button
                type="submit"
                form="form"
                className="submit-kandidat"
              >
                Submit
              </button> 
        </div>
      
     </div>
   
   
 


    

   
</>
    );
  }
  
  export default ContentKandidat;