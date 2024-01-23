import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WorkshopSelectionPage from './pages/WorkshopSelectionPage.jsx';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/workshops" element={<WorkshopSelectionPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
