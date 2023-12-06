import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '60%',
    height: '50%',
    background: 'linear-gradient(360deg, rgba(253, 253, 253,0) 47%, rgba(18, 1, 255,1) 120%)',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
  },
};

const UpdateModal = ({ isOpen, closeModal, item }) => {
  const [formValues, setFormValues] = useState({
    status: '',
    gaji: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    // No need for event.preventDefault() here since it's not a form submission
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log('ini name', name, 'ini value', value);
  };
  const user = JSON.parse(localStorage.getItem('user'));
  const handleUpdate = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior



    // console.log('ini id ', item.id);

    const gajiAsFloat = parseFloat(formValues.gaji);


    const datapost = {
      status: formValues.status,
      gaji: gajiAsFloat, // Use the converted float value
    };
    const datapostvp = {
      status: formValues.status,
    };
    if (user.role ==="admin") {
      axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: 'PUT',
        url: `http://localhost:8080/submission/admin/${item.id}`,
        data: datapost,
      })
      .then((response) => {
        toast.success('Pengajuan berhasil di update', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'toas-success',
          theme: 'green',
        });
        setTimeout(() => {
            closeModal()
          navigate('/pengajuan');
          
        
        }, 4000);
      })
      .catch((error) => {
        console.log(error.response.data);

        if (error.response.status === 401 && error.response.data.message === 'invalid or expired jwt') {
          toast.error('silahkan login terlebih dahulu', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setTimeout(() => {
         
            localStorage.removeItem('user')
             closeModal()
            navigate('/');
        
        }, 4000);
        } else {
          toast.error(error.response.data.data, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      });
    }else if (user.role==="vicepresident") {
      
      axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: 'PUT',
        url: `http://localhost:8080/submission/vicepresident/${item.id}`,
        data: datapostvp,
      })
      .then((response) => {
        toast.success('Pengajuan berhasil di update', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'toas-success',
          theme: 'green',
        });
        setTimeout(() => {
            closeModal()
          navigate('/pengajuan');
          
        
        }, 4000);
      })
      .catch((error) => {
        console.log("err",error.response.data);

        if (error.response.status === 401 && error.response.data.message === 'invalid or expired jwt') {
          toast.error('silahkan login terlebih dahulu', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setTimeout(() => {
         
            localStorage.removeItem('user')
             closeModal()
            navigate('/');
        
        }, 4000);
        } else {
          toast.error(error.response.data.data, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      });
    }else{
      axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: 'PUT',
        url: `http://localhost:8080/submission/direksi/${item.id}`,
        data: datapostvp,
      })
      .then((response) => {
        toast.success('Pengajuan berhasil di update', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'toas-success',
          theme: 'green',
        });
        setTimeout(() => {
            closeModal()
          navigate('/pengajuan');
          
        
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response.data);

        if (error.response.status === 401 && error.response.data.message === 'invalid or expired jwt') {
          toast.error('silahkan login terlebih dahulu', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setTimeout(() => {
         
            localStorage.removeItem('user')
             closeModal()
            navigate('/');
        
        }, 3000);
        } else {
          toast.error(error.response.data.data, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      });
    }
  
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="Update Status Modal">
      <div className="scroll-modal">
        <form className="form-input" onSubmit={handleUpdate}>
          
        <select name="status" onChange={handleInputChange} value={formValues.status}>
            <option value="" disabled hidden>
              Status
            </option>
            <option className={user.role !== "admin"? "input-pengajuan-disabled" : "input-pengajuan"} value="dievaluasi">Evaluasi Approved</option>
            <option className={user.role !== "vicepresident"? "input-pengajuan-disabled" : "input-pengajuan"}  value="diverifikasi"> verifikasi Approved</option>
            <option className={user.role === "direksi"? "input-pengajuan" : "input-pengajuan-disabled"}  value="disetujui"> Approved</option>
          </select>
          
          <input
            type="text"
            name="gaji"
            placeholder="Input Gaji"
            className={user.role !== "admin"? "input-pengajuan-disabled" : "input-pengajuan"}
            onChange={handleInputChange}
            value={formValues.gaji}
          />

          <button className="modal-ccl" onClick={() => closeModal()}>
            Cancel
          </button>
          <button type="submit" className="modal-submit">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateModal;
