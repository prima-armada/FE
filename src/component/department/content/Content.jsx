import  { React,useState,useContext,  useEffect } from 'react';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CImage ,CCarouselItem,CCarousel} from '@coreui/react'
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useDepartcontext } from '../../usecontext/usedepart';
import { useAuthContext } from "../../usecontext/useauthcontext";
import { toast,ToastContainer } from "react-toastify";
function ContentDepartment() {
    
  const navigate = useNavigate();
  const {department,dispatch} = useDepartcontext()

  const {user}= useAuthContext()
console.log("ini user ", user)
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

 
      useEffect(() => {
        const GetDepartment = async() => {
          axios.request({
               headers: {
                 Authorization: `Bearer ${user.token}`
               },
               method: "GET",
               url: "http://localhost:8080/department"
             }).then(response => {
               dispatch({type:'setdepartement', payload:response.data.data})
            
             }).catch(err=>{
              toast.error( "anda bukan admin", {
                position: "top-right",
                autoClose:3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",         
                        
             })
             }) 
               
         }
         if (user){
          if(user.role !== "admin"||user.role===""){
            toast.error( "anda bukan admin", {
              position: "top-right",
              autoClose:3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",         
                      
           })
           navigate("/")
          }else if(!user){
            toast.error( "Harap Login Terlebih Dahulu", {
              position: "top-right",
              autoClose:3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",         
                      
           })
           navigate("/")
          }
          GetDepartment();
         }
 
      }, [dispatch,user]);
    
    return (
      
<>
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
        <ToastContainer/>
        <div className='container-department'>
          <div className='content-head'>
            <Button className='btn-add' onClick={openModal} variant="contained" endIcon={<SendIcon />}>
              Add
            </Button>
            <input  type="text" placeholder="Search.." name="search" />
          </div>
         
        
        <div className='content-department'>
   
          <table>
            
              <thead className="dashboard-list-table-header">
                <tr>
                <th>Nama Deparment</th>
                <th>Action</th>
                </tr>
              </thead>
            <tbody className="dashboard-list-table-body">
            {department?.map((item) => {
              return (
                    <tr>
                      <td key={item.id_departments}>{item.nama_departments}</td>
                     
                      <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton onclic aria-label="delete" size="small">
                      <EditIcon fontSize="inherit" />
                      </IconButton>
                    </tr>
                
                );    
                })} 
              </tbody>
          
           </table>
         
        </div>
  
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
            name="department"
            placeholder="Your department"
            className="input-kandidat"
            // onChange={handleInputChange}
          />

           
        

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
 

   
</>
    );
  }
  
  export default ContentDepartment;