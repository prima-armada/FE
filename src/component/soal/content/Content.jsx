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

function ContentSoalInterview() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '54%',
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
      <div className='container-soal'>
        <div  className='content-soal'>
            <div className='content-table'>
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
                <th>Kategori</th>
                <th>Deskription</th>
                 <th>Action</th>
              
              </tr>
            </thead>
            <tbody className="detail-list-table-body">
              
                    <tr>
                    <td>fajar</td>
                    <td>budi</td>
                    <td>32343443</td>
                      
                    </tr>
                
                    <tr>
                      <td>fajar</td>
                      <td>budi</td>
                      <td>32343443</td>
                     
                    </tr>
                    <tr>
                     
                      <td>2</td>
                      <td>2</td>
                      <td>proses</td>
                     
                    </tr>
            </tbody>
          </table>
          </div>
            </div>
        </div>
      </div>


      <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
         
          <div className='scroll-modal'>
          <form className='form-input'>
          <input
            type="text"
            name="kategori"
            placeholder="Kategori"
            className="input-kandidat"
            // onChange={handleInputChange}
          />

           
            <textarea
              name="deskirption"
              id="komentar"
              cols="30"
              rows="5"
              placeholder="Deskription Soal"
              className="textarea"
            ></textarea>
         
          

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
  
  export default  ContentSoalInterview;