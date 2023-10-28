import React, { useState } from 'react';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CImage ,CCarouselItem,CCarousel} from '@coreui/react'
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Modal from 'react-modal';

function ContentDepartment() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
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
      <div className='container-content'>
        <div className='container-colousel'>

            <CCarousel  controls indicators>
                <CCarouselItem  >
                    <CImage className="d-block w-100" src={Logo2} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 " src={Logo2} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem >
                    <CImage className="d-block w-100" src={Logo2} alt="slide 3" />
                 </CCarouselItem>
            </CCarousel>
        </div>
        
        <div className='container-department'>
          <div className='content-head'>
            <Button className='btn-add' onClick={openModal} variant="contained" endIcon={<SendIcon />}>
              Add
            </Button>
            <input  type="text" placeholder="Search.." name="search" />
          </div>
        <div className='content-department'>
          <table>
              <thead className="dashboard-list-table-header">
                <tr>
                <th>Nama Deparment</th>
                <th>Action</th>
                </tr>
              </thead>
            <tbody className="dashboard-list-table-body">
              
                    <tr>
                      <td>Human Capital</td>
                     
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
                
                    <tr>
                      <td>HAAS</td>
                      
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
              </tbody>
           </table>
        </div>
        </div>
      </div>
   
   
    {/* <div className='container-detail'>
      <div className='content-head'>
      <Button className='btn-add' onClick={openModal} variant="contained" endIcon={<SendIcon />}>
        Add
      </Button>
      <input  type="text" placeholder="Search.." name="search" />
      </div>
      <div className='content-detail'>
      <table>
            <thead className="dashboard-list-table-header">
              <tr>
                <th>Nama Deparment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="dashboard-list-table-body">
              
                    <tr>
                      <td>Human Capital</td>
                     
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
                
                    <tr>
                      <td>HAAS</td>
                      
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
            </tbody>
          </table>
        </div>
    </div>
 */}


    <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
         
          <form className='form-kandidat'>
         
         <input
            type="text"
            name="department"
            placeholder="Your department"
            className="input-kandidat"
            // onChange={handleInputChange}
          />

           
        

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
  
  export default ContentDepartment;