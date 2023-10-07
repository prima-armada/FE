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

function ContentDetail() {

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
      <Button className='btn-add' variant="contained" endIcon={<SendIcon />}>
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
 
 {/* <Table stripped bordered hover size="sm">
   <thead>
     <tr>
       <th>Nama</th>
       <th>Role</th>
       <th >Progress</th>
       <th >Status</th>
       <th >Documentasi</th>
  
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>Rakesh</td>
       <td>1123</td>
       <td>CSE</td>
       <td>Mumbai</td>
       <td>86.9%</td>
  
     </tr>
     <tr>
       <td>Jackson</td>
       <td>1124</td>
       <td>ECE</td>
       <td>Hyderabad</td>
       <td>72.4%</td>
  
     </tr>
     
  
   </tbody>
 </Table> */}
</div>
   
</>
    );
  }
  
  export default ContentDetail;