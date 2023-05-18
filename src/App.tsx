import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterForm from './pages/AuthPage/RegisterForm';
import AdminPage from './pages/admins/AdminPage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='register' element={<RegisterForm />} /> */}
        {/* <Route path='admin' element={<AdminPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
