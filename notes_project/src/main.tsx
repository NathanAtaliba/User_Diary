import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { LogedPage } from './pages/LogedPage';
import { Toaster } from 'sonner';
import { SignupForm }  from './pages/SignupForm';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loged" element={<LogedPage />} />
      </Routes>
    </Router>
    <Toaster richColors />
  </React.StrictMode>,
  document.getElementById('root')
);