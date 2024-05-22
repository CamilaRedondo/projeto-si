import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SessionContextProvider from './session/SessionContext.context';

export default function App(){
  return (
    <SessionContextProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
      </BrowserRouter>
    </SessionContextProvider>
  );
}


