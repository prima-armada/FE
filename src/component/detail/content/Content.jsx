
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import React, { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from 'react-modal';
import axios from 'axios';
import {ToastContainer, toast } from "react-toastify";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
function ContentDetail() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [proses, setProses] = useState();
  const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width :'40%',
      height: '100%',
      background:' linear-gradient(360deg, rgba(253, 253, 253,0) 47%, rgba(18, 1, 255,1) 120%)',
      transform: 'translate(-50%, -50%)',
    
    },
  };
  let subtitle;
  useEffect(() => {
    Prosesdetail()
 
  }, []);
  function openModal() {
    setIsOpen(true);
  }

  const Prosesdetail = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: 'GET',
        url: 'http://localhost:8080/proses',
      })
      .then((response) => {
        setProses(response.data.data);
      })
      .catch((err) => {
        // Handle error
      });
  };
  function closeModal() {
    setIsOpen(false);
  }
  console.log("test",proses)
    return (
      
<>

   
   
    <div className='container-detail'>
      <div className='head-detail'>
      <Button onClick={openModal} className='btn-add' variant="contained" endIcon={<SendIcon />}>
        Add
      </Button>
      <input  type="text" placeholder="Search.." name="search" />
      </div>
      <div className='detail-content'>
      <table>
            <thead className="detail-list-table-header">
              <tr>
                <th>Nama Kandidat</th>
                <th>nama user</th>
                <th>nama hr</th>
                <th>Nama direksi</th>
                <th>Department</th>
                <th>Kode Pengajuan</th>
                <th>Nilai  User</th>
                <th>Nilai HR</th>
                <th>Nilai Direksi</th>
                <th>Total Nilai </th>
                <th>Status Kandidat</th>
                <th>Documentasi Kandidat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="detail-list-table-body">
            {proses?.map((item) => {
              return (
                    <tr key={item.id}>
                      <td>{item.nama_kandidat}</td>
                      <td>{item.nama_manager}</td>
                      <td>{item.nama_admin}</td>
                      <td>{item.nama_direksi}</td>
                      <td>{item.department_kandidat}</td>
                      <td>{item.kodepengajuan}</td>
                      <td>{item.nilai_manager}</td>
                      <td>{item.nilai_admin}</td>     
                      <td>{item.nilai_direksi}</td>      
                      <td>{item.total_nilai}</td>          
                      <td>{item.status}</td> 
                      <td>
                       <a href={item.cv} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon />
                       </a>
                      </td>
                      <td> 
                    <td>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </td>
                  
                    <td>
                      <IconButton  aria-label="edit" size="small">
                      <EditIcon fontSize="inherit" />
                      </IconButton>
                    </td>
                      
                  </td>
                 
                 
                    
                     
                    </tr>
                
                );    
                })} 
            </tbody>
          </table>
        </div>
    </div>
 
    <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
         
          <form className='form-kandidat'>
         
         <input
            type="text"
            name="jumlah"
            placeholder="Nama Kandidat"
            className="input-kandidat"
            // onChange={handleInputChange}
          />

           <input
            type="text"
            name="posisi"
            placeholder="position"
            className="input-kandidat"
            // onChange={handleInputChange}
          />
         <input
            type="file"
            id="detail-file"
            name="file"
          />
          <select name='progress' >
            <option value=''>Your progress</option>
            <option value="hc">interview hc</option>
            <option value="hc">interview user</option>
            <option value="approved">approved</option>
          </select>

          <select name='proses' >
            <option value=''>status proses</option>
            <option value="hc">Proses</option>
            <option value="hc">pending</option>
            <option value="approved">failed</option>
            <option value="approved">passed</option>
          </select>
        

              <button className="modal-cancel" onClick={() => closeModal()}>
                Cancel
              </button>
              <button
                type="submit"
                // onClick={(e) => addData(e)}
                form="form"
                className="modal-submit"
              >
                Submit
              </button>
         </form>
          
    </Modal>

   
</>
    );
  }
  
  export default ContentDetail;