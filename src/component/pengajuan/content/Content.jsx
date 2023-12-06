import React, { useState,useEffect } from 'react';
import UpdateModal from '../../modals/pengajuan/Updated';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import IconButton from '@mui/material/IconButton';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import {ToastContainer, toast } from "react-toastify";
// import Signaturepad from  "react-signature-canvas"

import axios from "axios";
// import { EditButton } from 'react-admin';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width :'60%',
    height: '100%',
    background:' linear-gradient(360deg, rgba(253, 253, 253,0) 47%, rgba(18, 1, 255,1) 120%)',
    transform: 'translate(-50%, -50%)',
  
  },
};
Modal.setAppElement('#root');
function ContentPengajuan() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
  const [data, setAllData]= useState();
  const [selectedItem, setSelectedItem] = useState(null)
  const [formValues, setFormValues] = useState({
    jumlah: '',
    alasan: '',
    posisi: '',
    tanggal_kebutuhan: '',
    pencaharian: '',
    golongan: '',
    
  });
  const handleUpdateStatus = (item) => {
    setSelectedItem(item);
    setUpdateModalIsOpen(true);
    GetallData()
  };
const handleDateChange = (date) => {
  setFormValues({
    ...formValues,
    tanggal_kebutuhan: date,
  });
};

  const weekend = (date) => new Date() < date;
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  const handleInputChange = (event) => {
    event.preventDefault();
    var {name,value} = event.target;
    setFormValues({
    ...formValues,
    [name]: value,
  });
  // console.log("ini name", name ,"ini value",value)
};
const handleSubmit = (event) => {
  event.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  
  // Check if the date is already a string or a Date object
  const formattedDate = typeof formValues.tanggal_kebutuhan === 'string'
    ? formValues.tanggal_kebutuhan
    : format(formValues.tanggal_kebutuhan, "dd/MM/yyyy");

  const datapost = {
    jumlah: formValues.jumlah,
    alasan: formValues.alasan,
    posisi: formValues.posisi,
    tanggal_kebutuhan: formattedDate,
    pencaharian: formValues.pencaharian,
    golongan: formValues.golongan,
  };

  axios
    .request({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "POST",
      url: `http://localhost:8080/submission/addsubmission`,
      data: datapost,
    })
    .then((response) => {
     
        toast.success('Pengajuan berhasil di buat', {
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
            setIsOpen(false)
            navigate('/pengajuan');
            GetallData()
        
        }, 4000);



   
    })
    .catch((error) => {
        console.log(error.response.data.message)

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
          setIsOpen(false)
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

  useEffect(()=>{
    GetallData()
  },[])
  
  const GetallData =()=>{
    const user= JSON.parse(localStorage.getItem("user"))

    if (user.role === "admin"){
      axios.request({
        headers: {
          Authorization: `Bearer ${user.token}`
        },
        method: "GET",
        url: `http://localhost:8080/submission/admin`,
      }).then(response => {
     
        setAllData(response.data.data)
      }).catch(err => {
        // Handle error
      } );
    }else{
        axios.request({
          headers: {
            Authorization: `Bearer ${user.token}`
          },
          method: "GET",
          url: `http://localhost:8080/submission/user`,
        }).then(response => {
          // console.log("manager",response.data)
          setAllData(response.data.data)
        }).catch(err => {
          // Handle error
        });
      
    }
  
    // console.log("ini data",data)
    }
  

  return (
      
<>

   
    <div className='container-pengajuan'>
    <ToastContainer />
      <div className='content-head-pengajuan'>
      <Button onClick={openModal} className='btn-add' variant="contained" endIcon={<SendIcon />}>
        Add
      </Button>
      <UpdateModal
        isOpen={updateModalIsOpen}
        closeModal={() => setUpdateModalIsOpen(false)}
        item={selectedItem}
      />
      <input  type="text" placeholder="Search.." name="search" />
      </div>
      <div className='content-pengajuan'>
      <table>
            <thead className="pengajuan-list-table-header">
              <tr>
                <th>Department  </th>
                <th>Nama Manager </th>
                <th>Alasan </th>
                <th>Tanggal Kebutuhan</th>
                <th> Pencharian</th>
                <th>Maks Gaji</th>
                <th>Posisi</th>
                <th>status </th>
                <th>Nama Vp</th>
                <th>Nama Direksi</th>
                <th>nama evaluasi</th>
                <th>Kode Pengajuan</th>
                <th>tanggal pengajuan</th>
                <th>tanggal evaluasi</th>
                <th>Tanggal verifikasi</th>
                <th>tanggal disetujui</th>
                <td>action</td>
              </tr>
            </thead>
            <tbody className="pengajuan-list-table-body">
            {data?.map((item) => {
              return (
       
                <tr>
                  <td key={item.id}>{item.department}</td>
                  <td> {item.nama_user}</td>
                  <td> {item.alasan}</td>
                  <td> {item.tanggal_kebutuhan}</td>
                  <td> {item.pencarian}</td>
                  <td> {item.gaji}</td>
                  <td>{item.posisi}</td>
                  <td> {item.status_pengajuan}</td>
                  <td>{item.nama_verifikasi}</td>
                  <td>{item.nama_direksi}</td>
                  <td>{item.nama_admin}</td>
                  <td>{item.kode_pengajuan}</td>
                  <td>{item.tanggal_pengajuan}</td>
                  <td>{item.tanggal_evalusi}</td>
                  <td>{item.tanggal_verifikasi}</td>
                  <td>{item.tanggal_disetujui}</td>

                  <td> 
                    <td>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </td>
                  
                    <td>
                      <IconButton onClick={() => handleUpdateStatus(item)} aria-label="edit" size="small">
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
          
         
          <div className='scroll-modal'>
        
          <form className='form-input' onSubmit={handleSubmit}>

          <label htmlFor="Upload Image">Tanggal Kebutuhan</label>
     
          <DatePicker
          className='date-input'
          placeholder="tanggal kebutuhan"
          // showTimeSelect
          filterDate={weekend}
          name="tanggal_kebutuhan"
          selected={formValues.tanggal_kebutuhan}
          onChange={handleDateChange}
        />
        
          <select name='pencaharian' onChange={handleInputChange} >
           <option value="" disabled selected hidden> metode pencaharian</option>
            <option value="internal">internal</option>
            <option value="job portal">job portal</option>
            <option value="arsip pelamar">arsip pelamar</option>
            </select>

            <select name='posisi' onChange={handleInputChange} >
            <option value="" disabled selected hidden>posisi kosong</option>
            <option value="manager">Manager</option>
            <option value="staff">staff</option>
            <option value="vicepresident">Vp</option>
            </select>

            <input
            type="text"
            name="jumlah"
            placeholder="Jumlah Kebutuhan"
            className="input-pengajuan"
            onChange={handleInputChange}
          />
        
        <input
            type="text"
            name="golongan"
            placeholder="golongan"
            className="input-pengajuan"
            onChange={handleInputChange}
          />
            <select name='alasan' onChange={handleInputChange} >
            <option value="" disabled selected hidden>Alasan Kebutuhan</option>
            <option value="pergantian">Pergantian Orang</option>
            <option value="posisi">posisi kosong</option>
            <option value="mutasi">mutasi</option>
            </select>
         
          

              <button className="modal-ccl" onClick={() => closeModal()}>
                Cancel
              </button>
              <button
                type="submit"
                // onClick={(e) => addData(e)}
                className="modal-submit"
              >
                Submit
              </button>
         </form>
        </div>
          
    </Modal>

   
</>
    );
  }
  
  export default ContentPengajuan;