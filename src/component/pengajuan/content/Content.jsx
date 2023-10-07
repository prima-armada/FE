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
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import IconButton from '@mui/material/IconButton';


function ContentPengajuan() {

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
                <th >Department</th>
                <th>tanggal </th>
                <th>jumlah</th>
                <th>Alasan</th>
                <th>Pencarian</th>
                <th>Gaji</th>
                <th>Komentar</th>
                <th>diajukan</th>
                <th>golongan</th>
              </tr>
            </thead>
            <tbody className="dashboard-list-table-body">
              
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
 
 
</div>
   
</>
    );
  }
  
  export default ContentPengajuan;