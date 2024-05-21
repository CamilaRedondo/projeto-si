import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import SessionContextProvider from './session/SessionContext.context';

export default function App(){
  return (
    <SessionContextProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
      </BrowserRouter>
    </SessionContextProvider>
  );
}


