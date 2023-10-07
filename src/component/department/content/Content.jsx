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
// import Table from 'react-bootstrap/Table'
// import 'bootstrap/dist/css/bootstrap.css';

function ContentDepartment() {

    return (
      
<>
<div style={{ display: "flex", height: "100vh", flex: "wrap", justifyContent: "space-between"}}>
      <Sidebar className="sidebar">
        <Menu>
          <MenuItem  component={<Link to="/dashboard" className="link" />} className="menu1">
          <img className='logo-sidebar' src={Logo2}alt="logo" />
          </MenuItem>
          <MenuItem icon=  {<DashboardIcon  />} component={<Link to="/dashboard" className="link" />} >Dashboard</MenuItem>
          <MenuItem icon={<ManageHistoryIcon  />} component={<Link to="/detail" className="link" />}> Detail Proses </MenuItem>
          <MenuItem icon={<BookmarksIcon />} component={<Link to="/pengajuan" className="link" />}> Pengajuan </MenuItem>
          <MenuItem icon={<AssignmentIndIcon />}> Profile </MenuItem>
          <MenuItem icon={<LocalFireDepartmentIcon  />}> Detail Department</MenuItem>
          <MenuItem icon={<ExitToAppIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
   
   
    <div className='container-detail'>
      <div className='content-head'>
      <Button className='btn-add' variant="contained" endIcon={<SendIcon />}>
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
 
 
</div>
   
</>
    );
  }
  
  export default ContentDepartment;