import  { React,useState,useEffect } from 'react';
import '../../../assets/css/project.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import DatePicker from 'react-datepicker';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';
import {ToastContainer, toast } from "react-toastify";
import Modal from 'react-modal';
function ContentInterviewKandidat() {
  const [allcode, setCode] = useState();
  const [allsoal, setSoal] = useState();
  const [formValues, setFormValues] = useState({
    kodepengajuan: '',
    nama_kandidat: '',
    tanggal: '',
    kategori: '',
    kriteria: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    allcodes();
    soal();
  }, [formValues]);

  const handleDateChange = (date) => {
    setFormValues({
      ...formValues,
      tanggal: date,
    });
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value, type } = event.target;

    if (type === 'radio' && name.startsWith('kriteria')) {
      const kriteriaName = name.split('_')[1];
      const kategori = document.querySelector(`td[data-kategori="${kriteriaName}"]`).textContent;

      setFormValues({
        ...formValues,
        kategori: kategori.trim(),
        kriteria: value,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    const formattedDate =
      typeof formValues.tanggal === 'string'
        ? formValues.tanggal
        : format(formValues.tanggal, 'dd/MM/yyyy');

    const datapost = {
      kodepengajuan: formValues.kodepengajuan,
      nama_kandidat: formValues.nama_kandidat,
      tanggal: formattedDate,
      kategori: formValues.kategori,
      kriteria: formValues.kriteria,
    };

    axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: 'POST',
        url: 'http://localhost:8080/interview/addinterview',
        data: datapost,
      })
      .then((response) => {
        // Handle success
        console.log(response.data);
        toast.success('Pengajuan berhasil di buat', {
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
       
      })
      .catch((error) => {
        // Handle error
        console.log(error.response.data);
        if (
          error.response.status === 401 &&
          error.response.data.message === 'invalid or expired jwt'
        ) {
          toast.error('Silahkan login terlebih dahulu', {
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
            localStorage.removeItem('user');
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
  };

  const soal = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: 'GET',
        url: 'http://localhost:8080/soal/datasoal',
      })
      .then((response) => {
        setSoal(response.data.data);
      })
      .catch((err) => {
        // Handle error
      });
  };
 
  const weekend = (date) => new Date() < date;

  const allcodes = async () => {
    var { kodepengajuan } = document.forms[0];
    const datapost = {
      kodepengajuan: kodepengajuan.value,
    };
    const user = JSON.parse(localStorage.getItem('user'));

    axios
      .request({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: 'GET',
        url: `http://localhost:8080/kandidat?code=${datapost.kodepengajuan}`,
      })
      .then((response) => {
        setCode(response.data.data);
      })
      .catch((err) => {
        // Handle error
      });
      
  };
  const handleReset = () => {
    setIsModalOpen(true);
  };
  const handleConfirmReset = () => {
    setIsModalOpen(false);
    setFormValues({
      kodepengajuan: '',
      nama_kandidat: '',
      tanggal: '',
      kategori: '',
      kriteria: '',
    });
    navigate('/detail');
  };

  const handleCancelReset = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container-interviewkandidat">
        <div className="content-interviewkandidat">
          <form className="form-interviewkandidat">
            <h3>Form Penilaian Interview</h3>
            <div className="head-interviewkandidat">
              <input
                type="text"
                name="kodepengajuan"
                placeholder=" kode Pengajuan"
                className="input-interviewkandidat"
                onChange={handleInputChange}
              />
              <select name="nama_kandidat" onChange={handleInputChange}>
                <option value="" disabled selected hidden>
                  Nama Kandidat
                </option>
                {allcode?.map((item) => (
                  <option value={item.nama_kandidat} key={item.nama_kandidat}>
                    {item.nama_kandidat}
                  </option>
                ))}
              </select>
              <label>Tanggal Wawancara</label>
              <DatePicker
                className="date-input"
                placeholder="tanggal kebutuhan"
                filterDate={weekend}
                name="tanggal"
                selected={formValues.tanggal}
                onChange={handleDateChange}
              />
            </div>
            <div className="body-interviewkandidat">
              <table className="table-interviewkandidat">
                <thead className="interviewkandidat-list-table-header">
                  <tr>
                    <th rowSpan="2">Kategori Soal </th>
                    <th rowSpan="2">Description Soal</th>
                    <th colspan="5">Penilaian Kandidat</th>
                    <th rowSpan="2">Action</th>
                  </tr>
                  <tr>
                    <th>Sangat Baik</th>
                    <th>Baik</th>
                    <th>Cukup</th>
                    <th>Kurang</th>
                    <th>Sangat Kurang</th>
                  </tr>
                </thead>
                <tbody className="interviewkandidat-list-table-body">
                  {allsoal?.map((item) => (
                    <tr key={item.kategori}>
                      <td data-kategori={item.kategori}>{item.kategori}</td>
                      <td>{item.deskripsi}</td>
                      <td>
                        <input
                          type="radio"
                          value="sangat baik"
                          name={`kriteria_${item.kategori}`}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          value="baik"
                          name={`kriteria_${item.kategori}`}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          value="cukup"
                          name={`kriteria_${item.kategori}`}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          value="Kurang"
                          name={`kriteria_${item.kategori}`}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          value="sangat kurang"
                          name={`kriteria_${item.kategori}`}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="submit-interviewkandidat"
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <button
                type="button"
                onClick={handleReset}
                className="submit-interviewkandidat"
              >
                Reset
              </button>
              </table>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Reset Confirmation"
        className="Modal-interview"
      >
        <h2>Are you sure you're done?</h2>
        <button onClick={handleConfirmReset}>Yes, I'm done</button>
        <button onClick={handleCancelReset}>No, continue working</button>
      </Modal>
    </>
  );
}
  

export default ContentInterviewKandidat;
