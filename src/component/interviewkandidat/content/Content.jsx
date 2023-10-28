import React, { useState } from 'react';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import DatePicker from "react-datepicker";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from 'react-modal';
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';

function ContentInterviewKandidat() {
  const [date, setDate] = useState(new Date());
  
  const weekend = (date) => new Date() < date;
  let subtitle;

    return (
      
<>
      <div className='container-interviewkandidat'>
        <div  className='content-interviewkandidat'>
          
            <form className='form-interviewkandidat'>
              <h3>Form Penilaian Interview</h3>
              <div className='head-interviewkandidat'>
              <input
              type="text"
              name="nama_refrence"
              placeholder=" Nama Kandidat"
              className="input-interviewkandidat"
            // onChange={handleInputChange}
              />
              <label >Tanggal Wawancara</label>
              <DatePicker
              className='tanggal-input'
              placeholder="tanggal Wawancara"
              // showTimeSelect
              filterDate={weekend}
              selected={date}
              onChange={date => setDate(date)}
              />
              </div>
              <div className='body-interviewkandidat'>
              <table className='table-interviewkandidat'>
            <thead className="interviewkandidat-list-table-header">
            <tr>
                <th rowSpan="2">Kategori Soal </th>
                <th rowSpan="2">Description Soal</th>
                <th  colspan="5">Penilaian Kandidat</th>
                 
              </tr>

              <tr>
              <th>Sangat Kurang</th>
              <th>Kurang</th>
              <th>Cukup</th>
              <th>Baik</th>
              <th>Sangat Baik</th>
              </tr>
            </thead>
            <tbody className="interviewkandidat-list-table-body">
              
                   
                  <tr>
                    <td>Pendidikan</td>
                    <td>323434fdddddddddddddddddddddddddd ddsdsddddddddddddddddddddddddddd
                     
                     </td>
                    <td>   
                    <input
                    type="radio"
                    value="tidakbagus"
                    name= "nilai1"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                  /></td>
                   <td>
                   <input
                    type="radio"
                    value="Kurang"
                    name= "nilai1"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                  /> </td>
                    <td>
                    <input
                    type="radio"
                    value="Cukup"
                    name= "nilai1"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                   /> </td>
                    <td>
                    <input
                    type="radio"
                    value="SangatCukup"
                    name= "nilai1"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                   /> </td>
                    <td>
                    <input
                    type="radio"
                    value="baik"
                    name= "nilai1"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                   /></td>
                    </tr>
           
                      
               
                   
                    <tr>
                    <td>Pendidikan</td>
                    <td>323434fdddddddddddddddddddddddddd ddsdsddddddddddddddddddddddddddd
                     
                    </td>
                    <td>   
                    <input
                    type="radio"
                    value="tidakbagus"
                    name= "nilai2"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                  /></td>
                   <td>
                   <input
                    type="radio"
                    value="Kurang"
                    name= "nilai2"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                  /> </td>
                    <td>
                    <input
                    type="radio"
                    value="Cukup"
                    name= "nilai2"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                   /> </td>
                    <td>
                    <input
                    type="radio"
                    value="SangatCukup"
                    name= "nilai2"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                   /> </td>
                    <td>
                    <input
                    type="radio"
                    value="baik"
                    name= "nilai2"
                    // checked={this.state.selectedOption === "Male"}
                    // onChange={this.onValueChange}
                   /></td>
                    </tr>
            </tbody>
          </table>
              </div>
              <button
                type="submit"
                // onClick={(e) => addData(e)}
                form="form"
                className="submit-interviewkandidat"
              >
                Submit
              </button>
            </form>
        </div>
      </div>


    


   
</>
    );
  }
  
  export default  ContentInterviewKandidat;