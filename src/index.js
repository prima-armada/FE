import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { AuthContext } from '../src/component/context/authcontext';
import Register from './pages/regis/Register';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Detail from './pages/detail/detail';
import Department from './pages/department/department';
import Pengajuan from './pages/pengajuan/detail';
import Kandidat from './pages/kandidat/kandidat';
import Lupapassword from './pages/lupapassword/lupapassword';
import SoalInterview from './pages/soal/soal';
import Interview from './pages/interview/interview';
import InterviewKandidat from './pages/interviewkandidat/interviewkandidat';

import { AuthContextProvider } from '../src/component/context/authcontext';
import { DepartProvider } from './component/context/Contextprovid';
import { useAuthContext } from './component/usecontext/useauthcontext';

const ProtectedRoute = ({ children }) => {
  const {user} = useAuthContext()

  return user ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/detail"
        element={
          <ProtectedRoute>
            <Detail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/department"
        element={
          <ProtectedRoute>
            <Department />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pengajuan"
        element={
          <ProtectedRoute>
            <Pengajuan />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kandidat"
        element={
          <ProtectedRoute>
            <Kandidat />
          </ProtectedRoute>
        }
      />
      <Route
        path="/forget"
        element={
          <ProtectedRoute>
            <Lupapassword />
          </ProtectedRoute>
        }
      />
      <Route
        path="/soalinterview"
        element={
          <ProtectedRoute>
            <SoalInterview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <Interview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interviewkandidat"
        element={
          <ProtectedRoute>
            <InterviewKandidat />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const AppWithProviders = () => (
  <React.StrictMode>
    <AuthContextProvider>
      <DepartProvider>
        <Router>
          <App />
        </Router>
      </DepartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppWithProviders />
);
