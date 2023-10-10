import React, { useState,useRef } from 'react';
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
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
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
                <th>Division</th>
                <th>Tanggal </th>
                <th>Jumlah</th>
                <th>Alasan</th>
                <th>Pencarian</th>
                <th>Gaji</th>
                <th>Komentar</th>
                <th>diajukan</th>
                <th>golongan</th>
              </tr>
            </thead>
            <tbody className="pengajuan-list-table-body">
              
                    <tr>
                      <td>hc</td>
                      <td>20/02/2024</td>
                      <td>1</td>
                      <td>Kekurangan orang</td>
                      <td>media social</td>
                      <td>20.0000</td>
                      <td>it support bisa jaringan bisa segalanya </td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <td>A1</td>
                    </tr>
                
                    
                    <tr>
                      <td>hc</td>
                      <td>20/02/2024</td>
                      <td>1</td>
                      <td>Kekurangan orang</td>
                      <td>media social</td>
                      <td>20.0000</td>
                      <td>it support bisa jaringan bisa segalanya </td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <td>A1</td>
                    </tr>
                   
                    <tr>
                      <td>hc</td>
                      <td>20/02/2024</td>
                      <td>1</td>
                      <td>Kekurangan orang</td>
                      <td>media social</td>
                      <td>20.0000</td>
                      <td>it support bisa jaringan bisa segalanya </td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <td>A1</td>
                    </tr>
                   
                    <tr>
                      <td>hc</td>
                      <td>20/02/2024</td>
                      <td>1</td>
                      <td>Kekurangan orang</td>
                      <td>media social</td>
                      <td>20.0000</td>
                      <td>it support bisa jaringan bisa segalanya </td>
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <td>A1</td>
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
          filterDate={weekend}
          selected={date}
          onChange={date => setDate(date)}
        />
         <input
            type="text"
            name="jumlah"
            placeholder="jumlah kebutuhan"
            className="input-pengajuan"
            // onChange={handleInputChange}
          />
          <select name='metode' >
           <option value=''>Your metode</option>
            <option value="Jobstreet">Jobstreet</option>
            <option value="linkid">linkid</option>
            </select>

            <input
            type="text"
            name="gaji"
            placeholder="Maksimal Gaji"
            className="input-pengajuan"
            // onChange={handleInputChange}
          />
           <label htmlFor="Upload Image">Komentar</label>
            <textarea
              name="komentar"
              id="komentar"
              cols="30"
              rows="5"
              className="modal-textarea"
            ></textarea>

            <select name='status' >
            <option value=''>Your status</option>
            <option value="Jobstreet">verifikasi</option>
            <option value="linkid">evaluasi</option>
            <option value="linkid">approved</option>
            </select>
            <label htmlFor="Upload Image">Your signature</label>
            <Signaturepad name="pengajuan" ref={signcanvas} canvasProps={{className:"signatureCanvas"}}/>  
            <button className='btn-save' onClick={save}>Save Signature</button>
            <button className='btn-clear' onClick={clear}>Clear Signature</button>
        
            {imageurl ?(
              <img
              src= {imageurl}
              alt = "mysignature"
              style={{display:"block", margin:"0 auto", border: "1px solid black" ,width: "100px"}}
              />
           
            ): null}

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
</div>
   
</>
    );
  }
  
  export default ContentPengajuan;