import {  Link } from "react-router-dom";
import { Menu, MenuItem } from "react-pro-sidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo2 from '../../assets/image/imgregis/logo-prima.png';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

import Button from '@mui/material/Button';
import { useLogout } from "../customhook/uselogout";
function NavsApp() {
    const { logout }=useLogout()
    const parsing= JSON.parse(localStorage.getItem("user"))


    const handleClick=()=>{
      logout()
    }
      return (
      
      <>
        <nav className="nav-app">
            <div className="nav-top">
            <ul className="ul-top">
                    <li >
                    <Menu className="menu" >
                    <MenuItem  component={<Link to="/dashboard" className="link" />} className="menu1">
                    <img className='logo-sidebar' src={Logo2}alt="logo" />
                    </MenuItem>
                    </Menu>
                    </li>

                    <li >
                    <Menu  className="menu">
                    <MenuItem className="menu1" icon=  {<DashboardIcon  />} component={<Link to="/dashboard" className="link" />} >Dashboard</MenuItem>
                    </Menu>
                    </li>
                    
                    <li>
                    <Menu className="menu">
                    <MenuItem className="menu1" icon={<ManageHistoryIcon  />} component={<Link to="/detail" className="link" />}> Detail Proses </MenuItem>
                    </Menu>
                    </li>
                    <li >
                    <Menu className="menu" >
                    <MenuItem className="menu1" icon={<BookmarksIcon />} component={<Link to="/pengajuan" className="link" />}> Pengajuan </MenuItem>
                    </Menu>
                    
                    </li>
                     <Button className='btn-out' onClick={handleClick} variant="contained" endIcon={<ExitToAppIcon  />}>Logout</Button>
                  
              </ul>
            </div>
          
               <div className="nav-bot">
               <ul className="ul-bot">
               <li>
             
                    <Menu   className={parsing.role === "admin" ?"menus":"menus-disabled" } >
                    <MenuItem className="menu2" icon={<LocalFireDepartmentIcon   />}component={<Link to="/department" className="link" />}>  Department</MenuItem>
                    </Menu>
                    
                    </li>
                    <li>
                    <Menu className="menus">
                    <MenuItem className="menu2" icon={<AssignmentIndIcon />}>  Profile </MenuItem>
                    </Menu>
                    
                    </li>
                  
                    <li>
                    <Menu className={parsing.role === "admin" ?"menus":"menus-disabled" }>
                    <MenuItem className="menu2" icon={<AssignmentIcon />} component={<Link to="/kandidat" className="link" />}> Formulir Kandidat 
                    </MenuItem>
                    </Menu>
                    
                    </li>
                    <li>
                    <Menu  className={parsing.role === "admin" ?"menus":"menus-disabled" } >
                    <MenuItem className="menu2" icon={<ReceiptLongIcon />} component={<Link to="/soalinterview" className="link" />}>Soal
                    </MenuItem>
                    </Menu>
                    </li>
                 
                    <li>
                    <Menu className="menus">
                    <MenuItem className="menu2" icon={< InterpreterModeIcon  />} component={<Link to="/interviewkandidat" className="link" />}> Interview </MenuItem>
                    </Menu>
                    
                    </li>
                </ul>
               </div>
                  
    
        </nav>
              
      
       
      </>
    );
  }
  
  export default NavsApp;