import React, { useState } from 'react';
import '../../../assets/css/project.css';
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import '@coreui/coreui/dist/css/coreui.min.css'
import {  Link } from "react-router-dom";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import Modal from 'react-modal';


function ContentDetail() {
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
<div style={{ display: "flex", height: "100vh", flex: "wrap", justifyContent: "space-between"}}>
      <Sidebar className="sidebar">
        <Menu>
          <MenuItem  component={<Link to="/dashboard" className="link" />} className="menu1">
          <img className='logo-sidebar' src={Logo2}alt="logo" />
          </MenuItem>
          <MenuItem icon=  {<DashboardIcon  />} component={<Link to="/dashboard" className="link" />} >Dashboard</MenuItem>
          <MenuItem icon={<ManageHistoryIcon />} component={<Link to="/detail" className="link" />}> Detail Proses </MenuItem>
          <MenuItem icon={<BookmarksIcon />} component={<Link to="/pengajuan" className="link" />}> Pengajuan </MenuItem>
          <MenuItem icon={<AssignmentIndIcon />}> Profile </MenuItem>
          <MenuItem icon={<LocalFireDepartmentIcon/>} component={<Link to="/department" className="link" />}> Detail Department</MenuItem>
          <MenuItem icon={<ExitToAppIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
   
   
    <div className='container-detail'>
      <div className='content-head'>
      <Button onClick={openModal} className='btn-add' variant="contained" endIcon={<SendIcon />}>
        Add
      </Button>
      <input  type="text" placeholder="Search.." name="search" />
      </div>
      <div className='content-detail'>
      <table>
            <thead className="dashboard-list-table-header">
              <tr>
                <th >Nama</th>
                <th>Role</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Doc</th>
              </tr>
            </thead>
            <tbody className="dashboard-list-table-body">
              
                    <tr>
                      <td>fajar</td>
                      <td>manager</td>
                      <td>proses</td>
                      <td>interview user</td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
                
                    <tr>
                      <td>budi</td>
                      <td>manager</td>
                      <td>proses</td>
                      <td>interview user</td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
                    <tr>
                      <td>budi</td>
                      <td>manager</td>
                      <td>proses</td>
                      <td>interview user</td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
                    <tr>
                      <td>budi</td>
                      <td>manager</td>
                      <td>proses</td>
                      <td>interview user</td>
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
</div>
   
</>
    );
  }
  
  export default ContentDetail;