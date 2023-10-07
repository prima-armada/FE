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

function ContentSidebar() {

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
      
        
    
        </div>
  
   
</>
    );
  }
  
  export default ContentSidebar;