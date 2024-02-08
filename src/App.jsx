import { Route, Routes } from 'react-router-dom';
import OtpInput from './components/Otp.jsx';
import ResetEmail from './pages/ResetEmail.jsx';
import NewPwd from './components/NewPwd.jsx';
import UserReasons from './components/UserReasons.jsx';
import JoinAsPage from './components/JoinAs.jsx';
import { React, useState } from 'react';
import ResetProvider from './providers/resetProvider.jsx';
import Registration from './components/Registration.js';
import LandingPage from './pages/LandingPage.js';
import Auth from './pages/Auth.jsx';
import useAlert from './hooks/useAlert.js';
import Alert from './components/Alert.jsx';

function App() {
  return (
    <>
      {/* <ResetProvider> */}
      <Routes> 
        {/* <ResetProvider> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/otp" element={<OtpInput />}></Route>
        <Route path="/newpwd" element={<NewPwd />}></Route>
        <Route path="/reasons" element={<UserReasons />}></Route>
        <Route path="/joinAs" element={<JoinAsPage />}></Route>
        <Route path="/resetemail" element={<ResetEmail />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />}></Route>
        {/* </ResetProvider> */}
      </Routes>
      {/* </ResetProvider> */}
    </>
  );
}

export default App;
