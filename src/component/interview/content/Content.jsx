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

function ContentInterview() {


 
  
  
    return (
      
<>
      <div className='container-soal'>
        <div  className='content-soal'>
            <div className='content-table'>
            <div className='head-detail'>
      <Button  className='btn-add' variant="contained" endIcon={<SendIcon />}>
        Add
      </Button>
      <input  type="text" placeholder="Search.." name="search" />
      </div>
      <div className='detail-content'>
      <table>
            <thead className="detail-list-table-header">
              <tr>
                <th>Deparment yang dilamar  </th>
                <th>nama kandidat</th>
                 <th>tanggal wawancara</th>
                 <th>nip</th>
                 <th>nama interviewer</th>
                 <th>rekomendasi</th>
                <th>akumulasi nilai</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="detail-list-table-body">
              
                    <tr>
                    <td>hc</td>
                    <td>budi</td>
                    <td>23/12/23</td>
                    <td>32434454</td>
                    <td>jaenab</td>
                    <td>lolos</td>
                    <td>2</td>
                    <td></td>
                      
                    </tr>
                
                    <tr>
                    <td>hc</td>
                    <td>budi</td>
                    <td>23/12/23</td>
                    <td>32434454</td>
                    <td>jaenab</td>
                    <td>lolos</td>
                    <td>2</td>
                    <td></td>
                      
                    </tr>
                    <tr>
                    <td>hc</td>
                    <td>budi</td>
                    <td>23/12/23</td>
                    <td>32434454</td>
                    <td>jaenab</td>
                    <td>lolos</td>
                    <td>2</td>
                    <td></td>
                      
                    </tr>
            </tbody>
          </table>
          </div>
            </div>
        </div>
      </div>


  
     


   
</>
    );
  }
  
  export default  ContentInterview;