import React, { useState,useRef } from 'react';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import Signaturepad from  "react-signature-canvas"
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
  const [date, setDate] = useState(new Date());
  const [imageurl, setImageurl] = useState(null);


  const signcanvas = useRef({})
  const weekend = (date) => new Date() < date;
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  

  const clear = () => signcanvas.current.clear()

  const save = () => setImageurl(signcanvas.current.getTrimmedCanvas().toDataURL("image/png"))

  return (
      
<>

   
    <div className='container-pengajuan'>
      <div className='content-head-pengajuan'>
      <Button onClick={openModal} className='btn-add' variant="contained" endIcon={<SendIcon />}>
        Add
      </Button>
      <input  type="text" placeholder="Search.." name="search" />
      </div>
      <div className='content-pengajuan'>
      <table>
            <thead className="pengajuan-list-table-header">
              <tr>
                <th>Department  </th>
                <th>Nama pengajuan </th>
                <th>Jumlah</th>
                <th>Alasan </th>
                <th>Tanggal Kebutuhan</th>
                <th> Pencharian</th>
                <th>Maks Gaji</th>
                <th>status </th>
                <th>verifikasi</th>
                <th>persetujuan</th>
                <th>nama evaluasi</th>
                <th>golongan</th>
                <th>Tanggal verifikasi</th>
                <th>tanggal disetujui</th>
                <th>tanggal evaluasi</th>
                <td>action</td>
              </tr>
            </thead>
            <tbody className="pengajuan-list-table-body">
              
                    <tr>
                      <td>KROSCEK</td>
                      <td>fajar</td>
                      <td>1</td>
                      <td>Pergantian orang</td>
                      <td>22/10/1232</td>
                      <td>job portal</td>
                      <td>20.0000</td>
                      <td>verifikasi</td>
                      <td>adam</td>
                      <td>saleh</td>
                      <td>furqan</td>
                      <td>A1</td>
                      <td>21/10/2023</td>
                      <td>0</td>
                      <td>0</td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                     
                    </tr>
                
                    
                    <tr>
                      <td>HC</td>
                      <td>fajar</td>
                      <td>1</td>
                      <td>Pergantian orang</td>
                      <td>22/10/1232</td>
                      <td>job portal</td>
                      <td>20.0000</td>
                      <td>approved</td>
                      <td>adam</td>
                      <td>saleh</td>
                      <td>furqan</td>
                      <td>A1</td>
                      <td>21/10/2023</td>
                      <td>25/10/2023</td>
                      <td>22/10/1232</td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                     
                    </tr>
                
                    <tr>
                      <td>HAAS</td>
                      <td>fajar</td>
                      <td>1</td>
                      <td>Pergantian orang</td>
                      <td>22/10/1232</td>
                      <td>job portal</td>
                      <td>20.0000</td>
                      <td>verifikasi</td>
                      <td>adam</td>
                      <td>saleh</td>
                      <td>furqan</td>
                      <td>A1</td>
                      <td>21/10/2023</td>
                      <td>0</td>
                      <td>0</td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                     
                    </tr>
                     
                    <tr>
                      <td>GA</td>
                      <td>budi</td>
                      <td>1</td>
                      <td>Pergantian orang</td>
                      <td>22/10/1232</td>
                      <td>job portal</td>
                      <td>20.0000</td>
                      <td>approved</td>
                      <td>adam</td>
                      <td>saleh</td>
                      <td>furqan</td>
                      <td>A1</td>
                      <td>21/10/2023</td>
                      <td>25/10/2023</td>
                      <td>22/10/1232</td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                     
                    </tr>
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
          <form className='form-input'>
          <label htmlFor="Upload Image">Tanggal Kebutuhan</label>
     
          <DatePicker
          className='date-input'
          placeholder="tanggal kebutuhan"
          // showTimeSelect
          filterDate={weekend}
          selected={date}
          onChange={date => setDate(date)}
        />
        
          <select name='metode' >
           <option value=''disabled selected hidden>Your metode</option>
            <option value="refrence">Refrensi</option>
            <option value="job portal">job portal</option>
            <option value="arsip pelamar">arsip pelamar</option>
            </select>
            <select name='refrensi' >
            <option value=''disabled selected hidden>Your refrence</option>
            <option value="internal">internal</option>
            <option value="eksternal">eksternal</option>
            </select>

            <input
            type="text"
            name="internal_refrensi"
            placeholder="Internal Refrensi"
            className="input-pengajuan"
            // onChange={handleInputChange}
          />
          <input
            type="text"
            name="eksternal_refrensi"
            placeholder="Eksternal Refrensi"
            className="input-pengajuan"
            // onChange={handleInputChange}
          />

            <select name='alasan' >
            <option value=''disabled selected hidden>Alasan Kebutuhan</option>
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
                form="form"
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