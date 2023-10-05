import React, { useState } from 'react';
import '../../../assets/css/project.css';
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import '@coreui/coreui/dist/css/coreui.min.css'
import { CImage ,CCarouselItem,CCarousel} from '@coreui/react'
import {  Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
function ContentDashboard() {

    return (
      
<>
<div style={{ display: "flex", height: "100vh", flex: "wrap", justifyContent: "space-between"}}>
      <Sidebar className="sidebar">
        <Menu>
          <MenuItem  component={<Link to="/dashboard" className="link" />} className="menu1">
          <img className='logo-sidebar' src={Logo2}alt="logo" />
          </MenuItem>
          <MenuItem icon=  {<DashboardIcon  />} component={<Link to="/dashboard" className="link" />} >Dashboard</MenuItem>
          <MenuItem icon={<GroupAddIcon />} > Add Karyawan </MenuItem>
          <MenuItem icon={<BookmarksIcon />}> Detail Proses </MenuItem>
          <MenuItem icon={<AssignmentIndIcon />}> Profile </MenuItem>
          <MenuItem icon={<LocalFireDepartmentIcon  />}> Detail Department</MenuItem>
          <MenuItem icon={<ExitToAppIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
   
   
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
    <div className='container-count'>
        <div className='content-proses'>
        <p>Detail Proses</p>
          <span>8</span>
        </div>
        <div className='content-proses'>
        <p> Department</p>
          <span>8</span>
        </div>
        <div className='content-proses'>
        <p> Lolos</p>
          <span className='lolos'>8</span>
        </div>
        <div className='content-proses'>
        <p>Tidak Lolos</p>
          <span className='tidak-lolos'>8</span>
        </div>
    </div>
 </div>
</div>
   
</>
    );
  }
  
  export default ContentDashboard;