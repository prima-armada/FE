import React, { useState } from 'react';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from 'react-modal';


function ContentDetail() {
  const [modalIsOpen, setIsOpen] = useState(false);

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

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
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
                <th >Nama Kandidat</th>
                <th>Nama Refrence</th>
                <th>Nip Refrence</th>
                <th>Department Refrence</th>
                <th>Department kebutuhan</th>
                <th>nama manager</th>
                <th>Posisi Dilamar</th>
                <th>Nilai  User</th>
                <th>Nilai HR</th>
                <th>Total Nilai </th>
                <th>Status Kandidat</th>
                <th>Progress</th>
                <th>Documentasi Kandidat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="detail-list-table-body">
              
                    <tr>
                      <td>fajar</td>
                      <td>budi</td>
                      <td>32343443</td>
                      <td>haas</td>
                      <td>hc</td>
                      <td>adam</td>
                      <td>It Support</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>proses</td>
                      <td>interview user</td>
                      <td ></td>
                      <td ></td>
                    </tr>
                
                    <tr>
                      <td>fajar</td>
                      <td>budi</td>
                      <td>32343443</td>
                      <td>haas</td>
                      <td>hc</td>
                      <td>adam</td>
                      <td>It Support</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>proses</td>
                      <td>interview user</td>
                      <td ></td>
                      <td ></td>
                    </tr>
                    <tr>
                      <td>fajar</td>
                      <td>budi</td>
                      <td>32343443</td>
                      <td>haas</td>
                      <td>hc</td>
                      <td>adam</td>
                      <td>It Support</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2</td>
                      <td>proses</td>
                      <td>interview user</td>
                      <td ></td>
                      <td ></td>
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